# Jornada do Herói — como trabalhar neste projeto

Jogo de desenvolvimento pessoal em estilo anime (PWA no GitHub Pages). Idioma do usuário: português.
Spoilers: o usuário joga sem ler a história. Nunca conte o roteiro ou as respostas no chat.

## "Crie o episódio N"
1. Leia `docs/SPOILERS-temporada-1.md` (arco, personagens) e o episódio anterior em `conteudo/episodios.js`.
2. Escreva o episódio em `conteudo/episodios.js` no **estilo indireto** (o usuário pediu: como um anime, nada óbvio):
   - as escolhas são decisões da história, sem certo/errado; todas defensáveis, com tamanho e tom parecidos (a ordem é sorteada);
   - cada opção tem `valor` (0–2, fidelidade do Príncipe a si mesmo), `marca` opcional e `depois` com a consequência contada pela história;
   - use `se`/`seNao` com marcas para consequências atrasadas, inclusive de episódios anteriores;
   - ninguém explica a lição: ela fica só em `reflexao` (titulo, texto, pergunta, pontos), que o usuário abre se quiser;
   - vilões e mentores têm motivos e passado; nomes não entregam o tema; cada opção cita um `verso` da música.
   Se reescrever um episódio já publicado, aumente `versao` em `TEMPORADA`.
3. Escreva a música em `musicas/epNN-titulo.md` (PT e EN, ~7 min, letra com metáforas da história e não instruções, estilo sem nomes de artistas). Siga o formato dos arquivos existentes.
4. Imagens: acrescente os prompts numerados em `docs/arte-gemini.md`. O usuário sobe as imagens em `imagens/` sem renomear;
   identifique cada uma olhando, mova o original para `imagens/originais/<nome>.jpg` e rode `python3 ferramentas/processar-imagens.py <nome>...`, que gera `imagens/jogo/<nome>.webp`
   (personagens 900x1200 com alpha; cenários até 1600px). Registre expressões novas em `IMAGENS` e cenários em `.fundo.*`/`LOCAIS` no `index.html`.
5. Personagem novo precisa de voz: entregue um prompt de Voice Design para o usuário e grave o ID em `conteudo/vozes.js`.
6. Narração: `NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt ELEVENLABS_API_KEY=proxy-injected node ferramentas/gerar-narracao.mjs`
   (a chave do ElevenLabs está no ambiente `hero-journey`; só gera o que falta; `--limpar` apaga áudios que não são mais usados).
7. Teste no navegador (Playwright). Antes do commit rode `python3 ferramentas/nova-versao.py` (sem isso o iPhone não atualiza). Commit no branch de trabalho e publique.

## Lembrete pedido pelo usuário
Sempre que o usuário falar do Suno (gerar música, assinar, colar letra etc.), lembre: "Você me pediu para lembrar de usar o **Google Flow Music**, porque você já tem a assinatura e não precisa assinar o Suno."
