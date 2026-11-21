# Jornada do Herói — como trabalhar neste projeto

Jogo de desenvolvimento pessoal em estilo anime (PWA no GitHub Pages). Idioma do usuário: português.
Spoilers: o usuário joga sem ler a história. Nunca conte o roteiro ou as respostas no chat.

## "Crie o episódio N"
1. Leia `docs/SPOILERS-temporada-1.md` (arco, personagens) e o episódio anterior em `conteudo/episodios.js`.
2. Escreva o episódio em `conteudo/episodios.js`: 3–5 escolhas; opções com tamanho e tom parecidos (a ordem é sorteada no app);
   a dificuldade cresce com a temporada (ver curva no arquivo de spoilers). Cada retorno cita um verso da música.
3. Escreva a música em `musicas/epNN-titulo.md` (PT e EN, ~7 min, estilo sem nomes de artistas). Siga o formato dos arquivos existentes.
4. Imagens: acrescente os prompts numerados em `docs/arte-gemini.md`. O usuário sobe as imagens em `imagens/` sem renomear;
   identifique cada uma olhando, mova o original para `imagens/originais/<nome>.jpg`, tire o fundo verde e gere `imagens/jogo/<nome>.webp`
   (personagens 900x1200 com alpha; cenários até 1600px). Registre expressões novas em `IMAGENS` e cenários em `.fundo.*`/`LOCAIS` no `index.html`.
5. Personagem novo precisa de voz: entregue um prompt de Voice Design para o usuário e grave o ID em `conteudo/vozes.js`.
6. Narração: `NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt ELEVENLABS_API_KEY=proxy-injected node ferramentas/gerar-narracao.mjs`
   (a chave do ElevenLabs está no ambiente `hero-journey`; só gera o que falta).
7. Teste no navegador (Playwright), faça commit no branch de trabalho e publique.
