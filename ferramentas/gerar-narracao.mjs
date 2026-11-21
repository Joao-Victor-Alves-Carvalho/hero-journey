// Gera a narração dos episódios com o ElevenLabs.
// Uso:  ELEVENLABS_API_KEY=sua_chave node ferramentas/gerar-narracao.mjs
// Só gera o que ainda não existe: mudou uma fala? Só ela é gerada de novo.
// Os arquivos vão para audio/<hash>.mp3; o jogo calcula o mesmo hash (ver chaveAudio em index.html).

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import vm from "node:vm";

const RAIZ = new URL("..", import.meta.url).pathname;
const contexto = { window: {} };
vm.runInNewContext(readFileSync(RAIZ + "conteudo/episodios.js", "utf8"), contexto);
vm.runInNewContext(readFileSync(RAIZ + "conteudo/vozes.js", "utf8"), contexto);
const T = contexto.window.TEMPORADA;
const VOZES = contexto.window.VOZES;

// Ajuste fino de cada voz.
const AJUSTES = {
  narrador: { stability: 0.55, similarity_boost: 0.8, style: 0.2 },
  principe: { stability: 0.4, similarity_boost: 0.8, style: 0.35 },
  leo: { stability: 0.65, similarity_boost: 0.8, style: 0.1 },
  amanha: { stability: 0.5, similarity_boost: 0.8, style: 0.3 },
  voz: { stability: 0.5, similarity_boost: 0.8, style: 0.3 }
};

// Mesmo hash usado no jogo (FNV-1a 32 bits).
export function chaveAudio(quem, texto) {
  let h = 0x811c9dc5;
  const s = quem + "|" + texto;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

// Tudo o que é falado num episódio: falas, perguntas e retornos (lidos pela narradora).
function itensFalados(ep) {
  const itens = [];
  const fala = (p) => { if (p.quem && p.texto) itens.push({ quem: p.quem, texto: p.texto }); };
  for (const p of ep.passos) {
    fala(p);
    if (p.escolha) {
      itens.push({ quem: "narrador", texto: p.escolha.pergunta });
      for (const op of p.escolha.opcoes) {
        itens.push({ quem: "narrador", texto: op.retorno });
        (op.depois || []).forEach(fala);
      }
    }
  }
  return itens;
}

// Pensamentos aparecem entre parênteses na tela; na voz, sem os parênteses.
const paraVoz = (t) => t.replace(/^\((.*)\)$/s, "$1");

async function gerar(item) {
  const voz = VOZES[item.quem];
  if (!voz) throw new Error("Sem voz para: " + item.quem);
  const resp = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voz.id}?output_format=mp3_44100_64`, {
    method: "POST",
    headers: { "xi-api-key": process.env.ELEVENLABS_API_KEY || "", "Content-Type": "application/json" },
    body: JSON.stringify({
      text: paraVoz(item.texto),
      model_id: "eleven_multilingual_v2",
      voice_settings: AJUSTES[item.quem] || AJUSTES.narrador
    })
  });
  if (!resp.ok) throw new Error(`ElevenLabs respondeu ${resp.status}: ${await resp.text()}`);
  return Buffer.from(await resp.arrayBuffer());
}

mkdirSync(RAIZ + "audio", { recursive: true });
let novos = 0, existentes = 0, caracteres = 0;
for (const ep of T.episodios) {
  for (const item of itensFalados(ep)) {
    const arq = `${RAIZ}audio/${chaveAudio(item.quem, item.texto)}.mp3`;
    if (existsSync(arq)) { existentes++; continue; }
    process.stdout.write(`Ep ${ep.numero} · ${item.quem}: ${item.texto.slice(0, 50)}… `);
    writeFileSync(arq, await gerar(item));
    novos++;
    caracteres += item.texto.length;
    console.log("ok");
  }
}
console.log(`\nPronto: ${novos} áudios novos (${caracteres} caracteres), ${existentes} já existiam.`);
