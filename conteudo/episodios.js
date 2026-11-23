// Conteúdo da Temporada 1. O app lê este arquivo.
// Estilo: a história ensina de forma indireta, como um anime. Nada de aula: a lição só aparece na reflexão opcional do fim.
//
// Tipos de passo:
//   { cena: "quarto", local: "Quarto · 6h" }              troca o cenário (local é opcional)
//   { quem: "narrador", texto: "..." }                    narração
//   { quem: "principe", expr: "cansado", texto: "..." }   fala; expr = expressão (imagens/jogo/principe-cansado.webp)
//   { escolha: { pergunta, opcoes: [...] } }              decisão da história, sem certo/errado:
//       opção = { texto, valor (0, 1 ou 2: o quanto o Príncipe é fiel a si mesmo), marca (opcional), verso, depois: [passos] }
//   Qualquer passo aceita se: "marca" (só aparece se a marca existe) ou seNao: "marca".
//   As marcas valem para o resto da temporada: uma escolha pode voltar episódios depois.
//
// Mude `versao` quando reescrever episódios já publicados: saves antigos no meio de um episódio são descartados.

window.TEMPORADA = {
  titulo: "A Névoa Cinzenta",
  numero: 1,
  versao: 2,

  personagens: {
    narrador: { nome: "" },
    principe: { nome: "Príncipe", retrato: "principe" },
    leo: { nome: "Léo", retrato: "leo" },
    voz: { nome: "???", retrato: "voz" },
    amanha: { nome: "O Relojoeiro", retrato: "amanha" },
    sussurro: { nome: "O Relojoeiro", retrato: "voz" },
    tetsu: { nome: "Tetsu", retrato: "tetsu" }
  },

  episodios: [
    {
      numero: 1,
      titulo: "A Mentira Mais Doce",
      musica: "musicas/ep01-a-mentira-mais-doce.md",
      tituloMusica: { pt: "A Mentira Mais Doce", en: "Tomorrow (The Sweetest Lie)" },
      passos: [
        { cena: "vale" },
        { quem: "narrador", texto: "Em Vale Cinza, os relógios andam sempre um pouco atrasados. Ninguém repara. Ninguém tem pressa de reparar." },
        { quem: "narrador", texto: "Dizem que a névoa chegou numa segunda-feira. Ou num domingo. Ninguém lembra direito. Quem respira ela por muito tempo não fica doente. Só para de querer as coisas." },

        { cena: "quarto", local: "Quarto · 5h59" },
        { quem: "narrador", texto: "Príncipe acorda do mesmo sonho de sempre: um dragão vermelho pintado num muro, tão vivo que parece respirar." },
        { quem: "principe", expr: "cansado", texto: "(De novo esse sonho... Que horas são?)" },
        { quem: "narrador", texto: "5h59. Ele fecha os olhos e abre de novo. 5h59. O ponteiro dos segundos treme no lugar, como se alguém o segurasse." },
        { quem: "voz", texto: "Shhh... não precisa levantar. Olha só: o tempo parou pra você. Fica mais um pouco. Ninguém lá fora está te esperando." },
        {
          escolha: {
            pergunta: "O relógio não anda. A voz parece vir de dentro do travesseiro.",
            opcoes: [
              {
                texto: "Abre a janela para ver de onde vem essa névoa.",
                valor: 2, marca: "abriu_janela",
                verso: "A névoa recuou assustada, feito bicho que dispara",
                depois: [
                  { quem: "narrador", texto: "O ar frio entra de uma vez. A névoa recua da janela como um bicho assustado." },
                  { quem: "narrador", texto: "Lá fora, em todas as casas, os relógios marcam 5h59. Só o dele, atrás de Príncipe, faz tic. 6h00." },
                  { quem: "voz", texto: "...Quanta pressa. Tudo bem. Eu espero. Eu sempre espero." }
                ]
              },
              {
                texto: "Puxa a coberta e espera o relógio voltar a andar.",
                valor: 0, marca: "ficou_na_cama",
                verso: "A névoa não grita, ela só me faz dormir",
                depois: [
                  { quem: "narrador", texto: "Está quente. Está quieto. É o melhor sono da vida dele." },
                  { quem: "narrador", texto: "Quando acorda, o relógio marca 9h40. Doze chamadas perdidas do trabalho. A boca tem gosto de cinza." },
                  { quem: "voz", texto: "Viu? Não foi bom? Amanhã a gente repete." }
                ]
              },
              {
                texto: "Liga para o Léo, que sempre acorda antes de todos.",
                valor: 1, marca: "ligou_leo",
                verso: "No pulso dele o tempo morreu às cinco e pouco",
                depois: [
                  { quem: "narrador", texto: "Chama uma vez. Duas. Na terceira, Léo atende, com a voz arrastada." },
                  { quem: "leo", expr: "apatico", texto: "Alô... Príncipe? Ah, é você. Que horas são? ...Tanto faz. Tá tudo bem." },
                  { quem: "narrador", texto: "A ligação cai. O relógio de Príncipe dá um salto: 6h00. O do Léo, ele tem certeza, continua parado." }
                ]
              }
            ]
          }
        },

        { cena: "deposito", local: "Depósito · 8h" },
        { se: "ficou_na_cama", quem: "narrador", texto: "10h. Príncipe entra correndo no depósito. O chefe nem levanta os olhos. Ninguém percebeu que ele faltou a manhã inteira. É isso que dá mais medo." },
        { seNao: "ficou_na_cama", quem: "narrador", texto: "8h. O depósito da Transportadora Vale. Caixas, etiquetas, o mesmo barulho de sempre." },
        { quem: "narrador", texto: "No balcão ao lado trabalha Léo. Quando Príncipe era criança, Léo pintava os muros da rua. O dragão do sonho é dele: está no muro da padaria até hoje, desbotado." },
        { quem: "leo", expr: "apatico", texto: "Bom dia, moleque. Dia bonito, né? Igualzinho a ontem." },
        { quem: "narrador", texto: "Príncipe congela. Ontem, Léo disse exatamente a mesma frase. Com a mesma pausa. Com o mesmo sorriso vazio." },
        { quem: "narrador", texto: "No pulso do Léo, o relógio marca 5h59." },
        {
          escolha: {
            pergunta: "Léo arruma as mesmas caixas, na mesma ordem de ontem.",
            opcoes: [
              {
                texto: "Fala com ele sobre o dragão que ele pintou no muro.",
                valor: 2, marca: "lembrou_dragao",
                verso: "Eu sonho com um dragão vermelho pintado no muro",
                depois: [
                  { quem: "principe", expr: "neutro", texto: "Léo, lembra do dragão da padaria? A molecada fazia fila pra ver você pintar." },
                  { quem: "narrador", texto: "Por um segundo, só um, os olhos de Léo ficam castanhos de novo." },
                  { quem: "leo", expr: "triste", texto: "...Era vermelho. Eu misturava a tinta com... com..." },
                  { quem: "leo", expr: "apatico", texto: "Sei lá. Bom dia, moleque. Dia bonito, né?" }
                ]
              },
              {
                texto: "Observa de longe, tentando entender o que ele tem.",
                valor: 1, marca: "observou_leo",
                verso: "E ninguém acha estranho, só eu me sinto louco",
                depois: [
                  { quem: "narrador", texto: "Príncipe passa a manhã olhando. Léo não erra uma caixa. Não sua. Não reclama. Parece em paz." },
                  { quem: "narrador", texto: "Na hora do almoço, do outro lado da rua, um homem de chapéu cinza também observa Léo. Quando Príncipe pisca, ele sumiu." }
                ]
              },
              {
                texto: "Ajuda o Léo com as caixas, para aliviar o dia dele.",
                valor: 1, marca: "ajudou_leo",
                verso: "A mesma frase, a mesma pausa, os mesmos olhos que somem",
                depois: [
                  { quem: "narrador", texto: "Os dois terminam o trabalho antes do almoço. Léo agradece, com uma educação perfeita." },
                  { quem: "leo", expr: "apatico", texto: "Valeu, moleque. Agora dá pra descansar mais. Descansar é bom." },
                  { quem: "narrador", texto: "A névoa no galpão fica um pouco mais grossa. Príncipe não sabe dizer por quê." }
                ]
              }
            ]
          }
        },

        { cena: "sala", local: "Casa · 19h" },
        { quem: "narrador", texto: "19h. Quando Príncipe abre a porta de casa, a TV já está ligada. Ele mora sozinho." },
        { quem: "narrador", texto: "Na poltrona, de pernas cruzadas, está um homem de sobretudo cinza, com um chapéu que cobre os olhos. Na mão, um relógio de bolso parado." },
        { quem: "amanha", expr: "gentil", texto: "Boa noite, Príncipe. Desculpe entrar assim. A porta estava encostada, e você parecia tão cansado hoje." },
        { quem: "amanha", expr: "gentil", texto: "Aqui no Vale me chamam de Relojoeiro. Eu conserto o que as pessoas têm de mais quebrado: o cansaço." },
        { quem: "amanha", expr: "convencido", texto: "O Léo estava tão cansado. Agora ele está em paz. Não sofre mais com o amanhã. Você também não precisa sofrer." },
        { quem: "narrador", texto: "Ele estende o relógio parado. A tampa dourada brilha. Parece quente. Parece seguro." },
        {
          escolha: {
            pergunta: "O Relojoeiro espera, com o relógio na palma da mão.",
            opcoes: [
              {
                texto: "Segura o relógio por um instante, só para entender.",
                valor: 0, marca: "segurou_relogio",
                verso: "E por um segundo o peso saiu da minha mente",
                depois: [
                  { quem: "narrador", texto: "O metal é morno. Na mesma hora, o peso dos ombros some. Nenhuma conta. Nenhuma pressa. Nenhum amanhã." },
                  { quem: "narrador", texto: "Quando Príncipe percebe, a TV mostra o jornal das onze. Quatro horas sumiram. Ele devolve o relógio com a mão tremendo." },
                  { quem: "amanha", expr: "gentil", texto: "Viu? Não dói nada. A porta continua aberta, quando você quiser." }
                ]
              },
              {
                texto: "Exige que ele devolva tudo o que tirou do Léo.",
                valor: 2, marca: "enfrentou",
                verso: "Ele nunca roubou nada, isso é o que mais assusta",
                depois: [
                  { quem: "principe", expr: "determinado", texto: "Devolve o que você tirou dele." },
                  { quem: "amanha", expr: "convencido", texto: "Tirar? Eu nunca tirei nada de ninguém. Cada minuto que eu tenho, alguém me deu, de boa vontade. O Léo me deu quinze anos. Um 'depois' de cada vez." }
                ]
              },
              {
                texto: "Finge pensar na oferta, para descobrir quem ele é.",
                valor: 1, marca: "investigou",
                verso: "Tu não rouba, tu pede, e é por isso que tu ganha",
                depois: [
                  { quem: "principe", expr: "neutro", texto: "...E o que você ganha com isso?" },
                  { quem: "amanha", expr: "gentil", texto: "Companhia. O tempo é solitário quando só o seu relógio anda. Eu sei bem. Um dia, eu também tive uma marca no pulso." },
                  { quem: "narrador", texto: "Ele diz isso olhando para o próprio pulso, coberto pela manga. Depois sorri de novo, como se não tivesse dito nada." }
                ]
              }
            ]
          }
        },
        { quem: "amanha", expr: "gentil", texto: "Pense com calma. Eu não tenho pressa. Eu nunca tenho." },
        { quem: "narrador", texto: "Ele se levanta, toca a aba do chapéu e sai pela porta. A névoa vai atrás dele, como um cachorro obediente." },

        { cena: "noite", local: "Quarto · 23h59" },
        { quem: "narrador", texto: "23h59. Príncipe não consegue dormir. Pela janela, ele vê: em toda a cidade, os relógios continuam parados." },
        { cena: "marca", local: "Meia-noite" },
        { quem: "narrador", texto: "Meia-noite. Uma dor fina no pulso. Debaixo da pele, como uma tatuagem de luz cinzenta, surge um ponteiro de relógio." },
        { quem: "narrador", texto: "Tic. Ele anda. É o único relógio andando em Vale Cinza." },
        { quem: "principe", expr: "abalado", texto: "O que... o que é isso?!" },
        { quem: "sussurro", texto: "Ah... então era você. Faz tanto tempo que ninguém acorda nesta cidade. A gente se vê... amanhã." }
      ],
      reflexao: {
        titulo: "O ladrão gentil",
        texto: "O Relojoeiro nunca obrigou ninguém. Ele só pediu, com gentileza, um minuto de cada vez. O Léo não perdeu quinze anos num dia: entregou um 'depois' por vez, sempre por um bom motivo.",
        pergunta: "Qual é o 'só mais cinco minutos' que você entrega todos os dias sem perceber?",
        pontos: [
          "Os momentos mais perigosos são os confortáveis: a cama quente, o sofá, o 'amanhã eu começo'.",
          "Agir antes de negociar tira a força da voz. A janela se abre antes de a desculpa ficar pronta.",
          "Olhe para quem já parou. O caminho dos outros é um mapa de onde não ir."
        ]
      },
      gancho: "Por que só o relógio de Príncipe anda? Continua no Episódio 2."
    },

    {
      numero: 2,
      titulo: "Mil Golpes",
      musica: "musicas/ep02-mil-golpes.md",
      tituloMusica: { pt: "Mil Golpes", en: "A Thousand Strikes" },
      passos: [
        { cena: "muro", local: "Muro da padaria · 5h" },
        { quem: "narrador", texto: "Desde aquela noite, o ponteiro no pulso de Príncipe nunca parou. Quando ele faz alguma coisa, mesmo pequena, o tic fica mais forte. Quando ele desiste, fica fraco, e dói." },
        { quem: "narrador", texto: "Ele descobriu outra coisa: se repinta um traço do dragão no muro da padaria antes de o sol nascer, Léo para por um segundo ao passar por ali. Só um segundo. Mas para." },
        { quem: "narrador", texto: "Três madrugadas seguidas, três traços. Na quarta, choveu, teve hora extra e o ônibus quebrou. Ele não foi." },
        { quem: "narrador", texto: "Hoje, o muro amanheceu cinza de novo. Os três traços sumiram. O ponteiro no pulso anda devagar, como um coração cansado." },
        { quem: "principe", expr: "abalado", texto: "(Três dias... e uma noite apagou tudo.)" },
        { quem: "sussurro", texto: "Viu? Uma noite e acabou. É sempre assim. Por que não descansa até o fim de semana e recomeça tudo, direitinho?" },
        {
          escolha: {
            pergunta: "O muro está cinza. O sol nasce em vinte minutos.",
            opcoes: [
              {
                texto: "Pinta um traço agora mesmo, atrasado e sem jeito.",
                valor: 2, marca: "voltou_ao_muro",
                verso: "Um traço torto, tinta escorrendo, mas foi feito",
                depois: [
                  { quem: "narrador", texto: "Um traço só, torto, com a tinta escorrendo. O sol nasce. O ponteiro no pulso dá um tic forte, quase alegre." },
                  { quem: "narrador", texto: "Às sete, Léo passa. Para. Olha o traço vermelho por um segundo inteiro. E segue." }
                ]
              },
              {
                texto: "Espera o fim de semana para repintar tudo direito.",
                valor: 0, marca: "esperou_fim_de_semana",
                verso: "Mas o sábado perfeito costuma chegar tarde demais",
                depois: [
                  { quem: "narrador", texto: "No sábado, ele chega com três latas de tinta e um plano perfeito." },
                  { quem: "narrador", texto: "O muro não está mais lá. A prefeitura pintou tudo de cinza na sexta. Nenhum dragão. Nenhum traço. Como se nunca tivesse existido." },
                  { quem: "sussurro", texto: "Que pena. Mas olha pelo lado bom: agora você pode descansar." }
                ]
              },
              {
                texto: "Chama a molecada da rua para pintar o muro junto.",
                valor: 1, marca: "chamou_criancas",
                verso: "A vontade dos outros acende, mas não segura o fogo",
                depois: [
                  { quem: "narrador", texto: "Seis crianças, doze mãos, o muro cheio de cor em uma manhã. Léo para por quase um minuto." },
                  { quem: "narrador", texto: "No dia seguinte, nenhuma criança aparece. Nem no outro. O muro volta a desbotar. Príncipe volta sozinho, com um pincel só." }
                ]
              }
            ]
          }
        },

        { cena: "portao", local: "Depósito · 12h" },
        { quem: "narrador", texto: "Meio-dia. O portão de ferro do depósito está emperrado há meses. Hoje tem um senhor ali, com os braços cheios de cicatrizes de queimadura, martelando a dobradiça. Cada golpe igual ao anterior." },
        { quem: "tetsu", expr: "serio", texto: "Ei, moleque. Esse ponteiro no seu pulso. Desde quando ele anda?" },
        { quem: "principe", expr: "abalado", texto: "O senhor consegue ver? Ninguém mais vê." },
        { quem: "tetsu", expr: "serio", texto: "Vejo, porque já tive um igual. Numa cidade de relógios parados, um relógio que anda chama atenção. Ele já veio falar com você, não veio? O homem do chapéu." },
        { se: "segurou_relogio", quem: "tetsu", expr: "bravo", texto: "E você segurou o relógio dele. Dá pra sentir o cheiro de névoa na sua mão. Nunca mais faça isso." },
        { se: "investigou", quem: "tetsu", expr: "serio", texto: "Se ele te contou que já teve uma marca, não mentiu. Essa é a pior parte." },
        { quem: "tetsu", expr: "serio", texto: "Eu vejo você toda madrugada naquele muro. Me diz uma coisa. Por que você continua indo?" },
        {
          escolha: {
            pergunta: "Tetsu espera a resposta, de braços cruzados.",
            opcoes: [
              {
                texto: "Pra trazer o Léo de volta, custe o que custar.",
                valor: 1, marca: "motivo_leo",
                verso: "Quem volta por alguém, para quando ele não volta",
                depois: [
                  { quem: "tetsu", expr: "serio", texto: "E se ele não voltar? Você para de ir?" },
                  { quem: "narrador", texto: "Príncipe abre a boca e não encontra resposta." }
                ]
              },
              {
                texto: "Porque, se eu parar, eu viro igual a ele.",
                valor: 1, marca: "motivo_medo",
                verso: "Quem volta por medo, um dia o medo solta",
                depois: [
                  { quem: "tetsu", expr: "serio", texto: "Medo é um bom despertador, moleque. Mas é um péssimo motor. Uma hora ele acaba." }
                ]
              },
              {
                texto: "Não sei explicar. Só sei que é quem eu sou agora.",
                valor: 2, marca: "motivo_identidade",
                verso: "É ser quem eu escolhi, mesmo quando a força desaba",
                depois: [
                  { quem: "narrador", texto: "Tetsu fica um tempo em silêncio. Depois, quase sem mexer a boca, sorri." },
                  { quem: "tetsu", expr: "aprova", texto: "Essa é a única resposta que não acaba." }
                ]
              }
            ]
          }
        },
        { quem: "tetsu", expr: "serio", texto: "Rua das Brasas, número 7. Amanhã, cinco da manhã. Se atrasar, nem bate na porta." },
        { quem: "narrador", texto: "Ele guarda o martelo e vai embora sem olhar para trás. O portão, pela primeira vez em meses, fecha sem ranger." },

        { cena: "sala", local: "Casa · 21h" },
        { quem: "narrador", texto: "21h. O celular vibra. É o Guto, amigo de infância." },
        { quem: "narrador", texto: "\"Aniversário do Felipe hoje! Tá todo mundo aqui, só falta tu. Vem nem que seja rapidinho!\"" },
        { quem: "principe", expr: "cansado", texto: "(Faz tempo que eu não vejo o pessoal... Mas amanhã é cinco da manhã.)" },
        { quem: "sussurro", texto: "Vai. Uma horinha. Ninguém vira herói sozinho, Príncipe." },
        {
          escolha: {
            pergunta: "O convite brilha na tela.",
            opcoes: [
              {
                texto: "Vai à festa, decidido a voltar antes da meia-noite.",
                valor: 1, marca: "foi_festa",
                verso: "Cada escolha tem um preço que só cobra de manhã",
                depois: [
                  { quem: "narrador", texto: "A festa está boa. Boa até demais. Na mesa, Príncipe repara: os relógios de quase todos marcam 5h59." },
                  { quem: "narrador", texto: "Ele conversa, ri, tenta avisar o Guto, que só ri de volta. Quando olha o celular, são três da manhã." }
                ]
              },
              {
                texto: "Recusa, mas marca de ver o pessoal no sábado.",
                valor: 2, marca: "recusou_festa",
                verso: "A porta da forja abre às cinco, não amanhã",
                depois: [
                  { quem: "narrador", texto: "Guto manda um áudio rindo: \"Tá bom, vovô. Sábado é sem desculpa, hein!\"" },
                  { quem: "narrador", texto: "Príncipe dorme cedo. No pulso, o tic é calmo e firme." }
                ]
              },
              {
                texto: "Chama o Guto para ir com ele à forja de manhã.",
                valor: 1, marca: "convidou_guto",
                verso: "Sexta à noite o Guto chama: \"aniversário, vem rapidinho\"",
                depois: [
                  { quem: "narrador", texto: "\"Forja? Cinco da manhã? Tu tá bem, mano?\" Guto manda três risadas." },
                  { quem: "narrador", texto: "Mas, antes de dormir, Príncipe vê: Guto ficou um tempo digitando alguma coisa. E apagou." }
                ]
              }
            ]
          }
        },

        { cena: "forja", local: "Forja · 5h" },
        { se: "foi_festa", quem: "narrador", texto: "5h20. Príncipe chega correndo, sem ar. A porta de ferro está trancada." },
        { se: "foi_festa", quem: "narrador", texto: "Ele espera do lado de fora, no frio, por uma hora inteira. Às 6h20, a porta abre." },
        { se: "foi_festa", quem: "tetsu", expr: "bravo", texto: "Cinco horas é cinco horas. A forja não espera ninguém. Nem você." },
        { seNao: "foi_festa", quem: "narrador", texto: "5h da manhã. Rua das Brasas, número 7. Uma porta de ferro, uma fornalha acesa e o som de um martelo que não para." },
        { seNao: "foi_festa", quem: "tetsu", expr: "serio", texto: "Chegou. Já é alguma coisa." },
        { quem: "narrador", texto: "Tetsu entrega a Príncipe um martelo pesado e aponta para uma barra de ferro em brasa sobre a bigorna." },
        { quem: "tetsu", expr: "serio", texto: "Mil golpes. Todos iguais. Começa." },
        { quem: "narrador", texto: "No golpe cem, o ombro arde. No duzentos, a mão treme. No trezentos, o ferro parece igual ao começo." },
        { quem: "principe", expr: "esforco", texto: "(Isso não tá mudando nada...)" },
        { quem: "sussurro", texto: "Ele está rindo de você. Ninguém aprende nada batendo sempre no mesmo lugar." },
        {
          escolha: {
            pergunta: "O braço pesa. O ferro parece igual.",
            opcoes: [
              {
                texto: "Bate com toda a força, para terminar logo os mil.",
                valor: 0, marca: "bateu_forte",
                verso: "Ela quer que eu bata forte pra acabar logo e quebrar",
                depois: [
                  { quem: "narrador", texto: "Os golpes ficam altos, rápidos, desesperados. No seiscentos, um estalo: o ferro racha ao meio." },
                  { quem: "tetsu", expr: "serio", texto: "Começa de novo. Do um." },
                  { quem: "narrador", texto: "Ele recomeça, mais devagar desta vez. Leva a manhã inteira." }
                ]
              },
              {
                texto: "Conta baixinho, de dez em dez, sem mudar o ritmo.",
                valor: 2, marca: "contou",
                verso: "Cem vezes dez é mil, matemática de leão",
                depois: [
                  { quem: "narrador", texto: "Dez. Mais dez. Mais dez. O mundo encolhe até caber em dez golpes." }
                ]
              },
              {
                texto: "Para e observa o ritmo de Tetsu antes de continuar.",
                valor: 1, marca: "observou_tetsu",
                verso: "Ele só conhece o ritmo da minha mão",
                depois: [
                  { quem: "tetsu", expr: "bravo", texto: "Olhar não forja nada. Mas, já que parou... repara. Eu não bato forte. Eu bato igual." },
                  { quem: "narrador", texto: "Príncipe volta ao ferro, tentando imitar aquele ritmo. Erra. Acerta. Erra menos." }
                ]
              }
            ]
          }
        },
        { quem: "narrador", texto: "Quinhentos. Setecentos. Novecentos e noventa e nove. Mil." },
        { quem: "narrador", texto: "O ferro, que parecia não mudar nunca, agora tem a forma de uma lâmina." },
        { quem: "tetsu", expr: "aprova", texto: "Nenhum golpe sozinho fez essa lâmina. Mas, sem cada um deles, ela não existiria. Amanhã, cinco horas." },
        { quem: "narrador", texto: "Príncipe olha o pulso. O ponteiro anda forte, firme, no ritmo do martelo." },
        { quem: "narrador", texto: "Então a chama da fornalha tremula. A porta range sozinha, e uma névoa fina entra rente ao chão." },
        { quem: "amanha", expr: "gentil", texto: "Bom dia, mestre Tetsu. Quanto tempo..." },
        { quem: "amanha", expr: "convencido", texto: "Ainda ensinando meninos a bater em ferro? Lembra como terminou da última vez?" },
        { quem: "tetsu", expr: "bravo", texto: "...Sai da minha forja." },
        { quem: "narrador", texto: "O Relojoeiro sorri, toca a aba do chapéu e se desfaz na névoa. Tetsu fica em silêncio, apertando o martelo. Pela primeira vez, Príncipe vê a mão dele tremer." }
      ],
      reflexao: {
        titulo: "O muro e a lâmina",
        texto: "O dragão nunca ficava pronto: toda noite a névoa apagava um pouco. Mesmo assim, um traço por dia segurou o que um plano perfeito não segurou. E a lâmina não veio de um golpe forte. Veio de mil golpes iguais.",
        pergunta: "O que na sua vida só continua vivo se você voltar a ele todo dia, mesmo depois de falhar?",
        pontos: [
          "Falhou um dia? Volte no seguinte. O fim de semana perfeito pode não chegar.",
          "A vontade dos outros ajuda a começar, mas não segura o seu compromisso.",
          "Fazer por alguém ou por medo funciona até certo ponto. Fazer por quem você é não acaba.",
          "Ritmo vence força. Divida o que é grande em pedaços que cabem na mão."
        ]
      },
      gancho: "O que aconteceu da última vez? Continua no Episódio 3."
    }
  ]
};
