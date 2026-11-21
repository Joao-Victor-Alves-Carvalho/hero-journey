// Conteúdo da Temporada 1. O app lê este arquivo.
// Cada episódio tem: cenas (narração e falas), escolhas (com retorno) e a lição.
// Para criar um episódio novo, basta adicionar um objeto em `episodios`.
//
// Tipos de passo:
//   { cena: "quarto", local: "Quarto · 6h" } troca o cenário de fundo (local é opcional)
//   { quem: "narrador", texto: "..." }       narração
//   { quem: "principe", expr: "cansado", texto: "..." }  fala; expr escolhe a expressão (imagens/jogo/principe-cansado.webp)
//   { escolha: { pergunta, opcoes: [...] } } decisão; cada opção tem certa, retorno, verso e, se quiser, depois (falas extras)

window.TEMPORADA = {
  titulo: "A Névoa Cinzenta",
  numero: 1,

  personagens: {
    narrador: { nome: "" },
    principe: { nome: "Príncipe", retrato: "principe" },
    leo: { nome: "Léo", retrato: "leo" },
    voz: { nome: "???", retrato: "voz" },
    amanha: { nome: "Senhor Amanhã", retrato: "amanha" },
    sussurro: { nome: "Senhor Amanhã", retrato: "voz" },
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
        { quem: "narrador", texto: "Vale Cinza. Uma cidade onde a névoa nunca vai embora. Ninguém lembra quando ela chegou, e ninguém pergunta." },
        { quem: "narrador", texto: "Ela não machuca e não faz barulho. Só vai apagando a vontade das pessoas, devagar, até virarem Adormecidas: acordam, trabalham, rolam a tela, dormem. E repetem." },

        { cena: "quarto" },
        { quem: "narrador", texto: "5h59. O quarto de Príncipe. O despertador vai tocar em um minuto." },
        { quem: "principe", expr: "cansado", texto: "(Hoje eu começo. Prometi ontem. E anteontem também...)" },
        { quem: "narrador", texto: "O alarme toca. E junto com ele vem uma voz macia, que parece sair de dentro do travesseiro." },
        { quem: "voz", texto: "Shhh... mais cinco minutos. Você trabalhou tanto ontem. Você merece." },
        {
          escolha: {
            pergunta: "O alarme está tocando. O que Príncipe faz?",
            opcoes: [
              {
                texto: "Aperta a soneca. Cinco minutos não mudam nada.",
                certa: false,
                retorno: "Mudam, sim. A soneca quebra o sono em pedaços e deixa você mais cansado do que se tivesse levantado. E a primeira promessa do dia já foi quebrada antes de você abrir os olhos. A névoa adora começos assim.",
                verso: "Mais cinco minutos virou costume, virou religião"
              },
              {
                texto: "Coloca os pés no chão na hora, antes que a cabeça comece a negociar.",
                certa: true,
                retorno: "A voz só vence quando você conversa com ela. Agir nos primeiros segundos, antes de pensar, tira o poder da negociação. Com o corpo de pé, a decisão já foi tomada.",
                verso: "Pé no chão antes que a mente diga não",
                depois: [
                  { quem: "voz", texto: "Hm. Quanta pressa... Tudo bem. Eu espero. Eu sempre espero." }
                ]
              },
              {
                texto: "Pega o celular para ir acordando aos poucos.",
                certa: false,
                retorno: "Parece inofensivo, mas é o caminho mais curto para a névoa. Você começa o dia reagindo à vida dos outros e gasta os seus minutos mais limpos. \"Aos poucos\" vira quarenta minutos.",
                verso: "Celular na cara antes de abrir a janela"
              }
            ]
          }
        },

        { cena: "deposito" },
        { quem: "narrador", texto: "8h. O depósito da Transportadora Vale. Caixas, etiquetas, o mesmo barulho de sempre." },
        { quem: "narrador", texto: "No balcão ao lado trabalha Léo, 40 anos. Quando Príncipe era criança, Léo desenhava heróis nos muros da rua, e a molecada fazia fila para ver." },
        { quem: "principe", texto: "Léo! Você ainda desenha? Lembra daquele dragão no muro da padaria?" },
        { quem: "leo", expr: "apatico", texto: "...Desenho? Isso é coisa de quem tem tempo, moleque. Sonho é luxo." },
        { quem: "narrador", texto: "Príncipe olha nos olhos dele. Estão cinzas. Completamente cinzas, como se alguém tivesse apagado a cor por dentro." },
        { quem: "voz", texto: "Não se preocupe. Ele tem 40. Você tem 24. Você ainda tem tempo de sobra..." },
        {
          escolha: {
            pergunta: "Príncipe sente um frio na espinha. O que ele faz?",
            opcoes: [
              {
                texto: "Pensa: \"É verdade. Ainda sou novo, tenho tempo.\"",
                certa: false,
                retorno: "Essa é a armadilha mais perigosa: achar que o tempo protege você. Léo também teve 24 anos um dia. Ninguém vira Adormecido de uma vez. É um \"depois\" por dia até não sobrar nada. O que protege você é o hábito, não a idade.",
                verso: "Não foi um tiro, foi um \"depois\" que ninguém sentiu"
              },
              {
                texto: "Ignora. A vida do Léo não é problema dele.",
                certa: false,
                retorno: "Desviar o olhar é confortável, mas joga fora uma lição de graça. Quem fecha os olhos para o caminho dos outros costuma repetir esse caminho sem perceber.",
                verso: "Os olhos dele tão cinza, a voz não tem mais cor"
              },
              {
                texto: "Pergunta ao Léo quando foi que ele parou de desenhar, e escuta a resposta com atenção.",
                certa: true,
                retorno: "Isso é consciência. Léo mostra um futuro possível. Entender como ele chegou ali mostra o que você não pode repetir. Quem já parou é um mapa de onde não ir.",
                verso: "E eu vi meu futuro ali parado, sem calor",
                depois: [
                  { quem: "leo", expr: "triste", texto: "...Sei lá. Não teve um dia. Eu só fui deixando pra semana que vem. Aí a semana que vem virou quinze anos." }
                ]
              }
            ]
          }
        },

        { cena: "sala" },
        { quem: "narrador", texto: "19h. Príncipe chega em casa moído. Na gaveta está o caderno do projeto dele. Ele prometeu estudar hoje." },
        { quem: "principe", expr: "cansado", texto: "(Eu tô morto de cansado...)" },
        { quem: "narrador", texto: "O sofá nunca pareceu tão macio. E a voz volta, mais perto agora." },
        { quem: "voz", texto: "Hoje não vai render. Você vai fazer tudo mal feito. Amanhã você acorda descansado e faz direito: duas horas, foco total. Não é melhor assim?" },
        {
          escolha: {
            pergunta: "O caderno está na gaveta. O sofá está ali. O que Príncipe faz?",
            opcoes: [
              {
                texto: "Concorda: amanhã ele faz duas horas bem feitas.",
                certa: false,
                retorno: "Esse é o golpe favorito da voz: trocar dez minutos reais de hoje por duas horas imaginárias de amanhã. Amanhã você vai estar cansado de novo, e a dívida só cresce. Um plano grande no futuro é a cama mais confortável que existe.",
                verso: "Planejo duas horas pra fugir de dez minutos"
              },
              {
                texto: "Deita para ver um episódio e relaxar primeiro. Depois estuda.",
                certa: false,
                retorno: "\"Só um episódio\" costuma durar quatro. O descanso que vem antes da tarefa quase sempre toma o lugar dela. Faça primeiro os dez minutos. Aí o descanso vira recompensa.",
                verso: "Eu sou o \"só mais um\" do episódio inteiro"
              },
              {
                texto: "Abre o caderno e faz só dez minutos. Mesmo cansado, mesmo mal feito.",
                certa: true,
                retorno: "Dez minutos feios valem mais que duas horas perfeitas que nunca acontecem. A névoa se alimenta de dias zerados, e um dia com dez minutos não é zero: a corrente continua viva. Constância vence intensidade.",
                verso: "Não preciso de duas horas, preciso de dez minutos",
                depois: [
                  { quem: "narrador", texto: "Príncipe escreve por dez minutos. Fica feio. Fica torto. Mas fica." },
                  { quem: "principe", expr: "determinado", texto: "(Dez minutos. Não é muito. Mas hoje não foi zero.)" }
                ]
              }
            ]
          }
        },

        { cena: "noite" },
        { quem: "narrador", texto: "23h. Quando ele apaga a luz, a névoa entra pela fresta da janela e toma forma." },
        { quem: "narrador", texto: "Um homem alto, de sobretudo cinza, com um relógio de bolso parado no peito. O rosto não tem traços. Só um sorriso." },
        { quem: "amanha", expr: "gentil", texto: "Muito prazer. Eu sou o Senhor Amanhã. Todo mundo me conhece. Pouca gente me reconhece." },
        { quem: "amanha", expr: "convencido", texto: "Você me venceu duas vezes hoje. Parabéns. Mas me diga, Príncipe... amanhã você vai me vencer de novo, não vai?" },
        {
          escolha: {
            pergunta: "O Senhor Amanhã espera a resposta, sorrindo. O que Príncipe faz?",
            opcoes: [
              {
                texto: "Faz uma lista com 15 metas para o ano antes de dormir.",
                certa: false,
                retorno: "Planejar dá a mesma sensação boa de fazer, sem fazer nada, e por isso vicia. Uma lista de 15 metas à meia-noite é o Senhor Amanhã disfarçado de produtividade. Uma ação preparada vale mais que quinze metas.",
                verso: "Faço lista de metas e não colho nenhum dos frutos"
              },
              {
                texto: "Não responde. Separa a roupa, deixa o caderno aberto na mesa e põe o celular para carregar fora do quarto.",
                certa: true,
                retorno: "Você não discute com ele: você decide o amanhã hoje. Preparar o ambiente tira as decisões da sua frente. De manhã não há escolha a fazer, só o próximo passo. A força de vontade acaba. O ambiente não.",
                verso: "Hoje eu deixo a roupa pronta, o celular fora do quarto"
              },
              {
                texto: "Responde firme: \"Vou. Amanhã eu mudo tudo: acordo às 5h, academia, estudo e dieta.\"",
                certa: false,
                retorno: "Ele sorri, porque era exatamente isso que ele queria ouvir. Promessas gigantes dão a sensação de progresso sem progresso nenhum. Amanhã a lista vai pesar tanto que você vai largar tudo. Promessa grande é o combustível dele.",
                verso: "Cada promessa grande é a cama mais bacana"
              }
            ]
          }
        },

        { quem: "amanha", expr: "convencido", texto: "...Interessante. Faz muito tempo que alguém não me ignora." },
        { quem: "narrador", texto: "Ele se desfaz na névoa. Mas, antes de sumir, encosta um dedo frio no pulso de Príncipe." },
        { cena: "marca" },
        { quem: "narrador", texto: "Meia-noite. Uma dor gelada. No pulso de Príncipe, uma marca cinzenta em forma de ponteiro de relógio começa a brilhar." },
        { quem: "principe", expr: "abalado", texto: "O que... o que é isso no meu pulso?!" },
        { quem: "amanha", expr: "gentil", texto: "A gente se vê... amanhã." }
      ],
      licao: {
        titulo: "Amanhã é a mentira mais doce",
        pontos: [
          "Aja antes de negociar: pés no chão nos primeiros segundos.",
          "Observe quem já parou. O caminho dos outros é um mapa.",
          "Dez minutos hoje valem mais que duas horas amanhã. Não zere o dia.",
          "Decida o amanhã hoje: prepare o ambiente em vez de fazer promessas."
        ]
      },
      gancho: "O que é a marca no pulso de Príncipe? Continua no Episódio 2."
    },

    {
      numero: 2,
      titulo: "Mil Golpes",
      musica: "musicas/ep02-mil-golpes.md",
      tituloMusica: { pt: "Mil Golpes", en: "A Thousand Strikes" },
      passos: [
        { cena: "quarto", local: "Quarto · 3 dias depois" },
        { quem: "narrador", texto: "Três dias se passaram. Três manhãs com os pés no chão. Três noites com dez minutos no caderno." },
        { quem: "narrador", texto: "A marca no pulso não sumiu. Mas, a cada dia cumprido, ela parecia um pouco mais fraca." },
        { quem: "narrador", texto: "Até ontem. Ontem teve hora extra, chuva e ônibus quebrado. Príncipe chegou em casa à meia-noite e dormiu de roupa. Sem caderno." },
        { quem: "principe", expr: "abalado", texto: "(A marca... ela cresceu. Tá subindo pelo braço.)" },
        { quem: "sussurro", texto: "Viu só? Você quebrou a sequência. Agora já era... Recomeça na segunda, do zero, com tudo. Segunda é um dia tão bonito." },
        {
          escolha: {
            pergunta: "A sequência quebrou ontem. O que Príncipe faz hoje?",
            opcoes: [
              {
                texto: "Aceita recomeçar na segunda, com um plano novo e mais organizado.",
                certa: false,
                retorno: "A segunda-feira é o disfarce favorito do Senhor Amanhã. Depois de uma falha, esperar o recomeço perfeito transforma um dia perdido em uma semana perdida. Não existe recomeço: existe continuar.",
                verso: "Mas segunda é a curva onde a gente perde o caminho"
              },
              {
                texto: "Faz os dez minutos hoje, sem falta: falhar duas vezes já vira hábito.",
                certa: true,
                retorno: "Uma falha é um acidente. Duas seguidas são o começo de um hábito novo, e não é o hábito que você quer. A regra é simples: nunca falhe duas vezes. Não precisa compensar nem ser perfeito. Só precisa voltar hoje.",
                verso: "Falhei uma vez, beleza, isso é acidente",
                depois: [
                  { quem: "principe", expr: "determinado", texto: "(Dez minutos. Hoje. Nem que seja no ônibus.)" },
                  { quem: "narrador", texto: "Ele escreve no ônibus, com o caderno apoiado no joelho. A letra sai torta. A marca para de arder." }
                ]
              },
              {
                texto: "Faz vinte minutos hoje à noite, para compensar os dez de ontem.",
                certa: false,
                retorno: "Parece responsável, mas transforma o hábito em dívida. Dívida pesa, e o que pesa a gente evita. Amanhã você vai dever trinta. Não compense: só volte ao normal, hoje.",
                verso: "Não compenso, não me cobro, não carrego essa dívida"
              }
            ]
          }
        },

        { cena: "portao", local: "Depósito · 12h" },
        { quem: "narrador", texto: "Meio-dia. Intervalo do almoço. O portão de ferro do depósito está emperrado há meses, e ninguém nunca consertou." },
        { quem: "narrador", texto: "Hoje tem um senhor ali. Uns sessenta anos, braços cheios de cicatrizes de queimadura, martelando a dobradiça com uma calma estranha. Cada golpe igual ao anterior." },
        { quem: "tetsu", expr: "serio", texto: "Ei, moleque. Essa marca no seu pulso. Desde quando você tem isso?" },
        { quem: "principe", expr: "abalado", texto: "O senhor consegue ver? Ninguém mais vê." },
        { quem: "tetsu", expr: "serio", texto: "Eu vejo porque já tive uma igual. É a Marca dos Sussurros. Ela só aparece em quem começou a lutar contra eles. Os Adormecidos não têm marca nenhuma: já pararam de lutar." },
        { quem: "tetsu", expr: "serio", texto: "Cada vez que você cede, ela sobe. Cada vez que você segura, ela desce. Se chegar ao coração... você vira um deles." },
        { quem: "principe", expr: "neutro", texto: "E como eu faço ela parar de subir?" },
        { quem: "tetsu", expr: "bravo", texto: "Primeiro me responde uma coisa. E não mente, que eu percebo. Por que você quer mudar?" },
        {
          escolha: {
            pergunta: "Tetsu espera a resposta, de braços cruzados. O que Príncipe diz?",
            opcoes: [
              {
                texto: "Quero provar pra todo mundo que eu não sou mais um fracassado.",
                certa: false,
                retorno: "Provar para os outros é fogo de palha: queima forte e acaba rápido. No dia em que ninguém estiver olhando, ou ninguém der valor, a vontade some. A plateia muda de ideia. Você precisa de um motivo que não dependa dela.",
                verso: "Me perguntou o porquê, e eu quase menti bonito"
              },
              {
                texto: "Quero uma vida melhor, com mais dinheiro, e quero isso logo.",
                certa: false,
                retorno: "Querer uma vida melhor é justo. O problema é o \"logo\". Quem treina só pelo resultado desiste quando o resultado demora, e ele sempre demora mais do que a gente quer. O resultado é consequência, não combustível.",
                verso: "\"Quero provar pra eles\", \"quero grana\", quero mito"
              },
              {
                texto: "Quero ser alguém que cumpre o que promete, mesmo sem ninguém ver.",
                certa: true,
                retorno: "Essa resposta não depende de plateia nem de resultado. Depende só de você. Cada promessa cumprida é um voto na pessoa que você quer ser. Identidade se constrói assim: um voto de cada vez.",
                verso: "Quero cumprir minhas promessas, mesmo sem ninguém que note",
                depois: [
                  { quem: "tetsu", expr: "aprova", texto: "Hm. Resposta de gente. Rua das Brasas, número 7. Amanhã, cinco da manhã. Se atrasar um minuto, nem bate na porta." }
                ]
              }
            ]
          }
        },
        { quem: "narrador", texto: "Tetsu guarda o martelo e vai embora sem olhar para trás. O portão, pela primeira vez em meses, fecha sem ranger." },
        { quem: "sussurro", texto: "Cinco da manhã? Com esse velho maluco? Ah, Príncipe... vai amanhã. Ou depois." },

        { cena: "sala", local: "Casa · 21h" },
        { quem: "narrador", texto: "21h. O celular vibra. É o Guto, amigo de infância." },
        { quem: "narrador", texto: "\"Bora pro aniversário do Felipe? Tá todo mundo lá, só falta tu. Vem nem que seja rapidinho!\"" },
        { quem: "principe", expr: "cansado", texto: "(Faz tempo que eu não vejo o pessoal... Mas amanhã é cinco da manhã.)" },
        { quem: "sussurro", texto: "Só uma horinha. Você merece. Ninguém vira herói dormindo cedo numa sexta, né?" },
        {
          escolha: {
            pergunta: "O convite está na tela. O que Príncipe responde?",
            opcoes: [
              {
                texto: "Vai, mas promete a si mesmo voltar cedo. É só uma horinha.",
                certa: false,
                retorno: "\"Só uma horinha\" num aniversário quase nunca é uma horinha. A decisão de ir embora vai ser tomada às 23h, cansado, com todo mundo pedindo para ficar: o pior momento para decidir. Quem decide na hora perde para a hora.",
                verso: "E a voz: \"só uma horinha, ninguém vira herói sozinho\""
              },
              {
                texto: "Avisa a todos que mudou: agora não sai mais, é só foco total.",
                certa: false,
                retorno: "Parece força, mas é a armadilha do tudo ou nada. Cortar todo mundo e anunciar uma vida nova dá uma sensação boa hoje e vira um peso amanhã. Mudanças grandes e barulhentas costumam durar pouco. As pequenas e silenciosas ficam.",
                verso: "Não cortei ninguém da vida, só escolhi a minha luta"
              },
              {
                texto: "Recusa, explica que acorda cedo e marca de ver o pessoal no sábado.",
                certa: true,
                retorno: "Disciplina não é virar ermitão. Você protege o compromisso de amanhã sem cortar as pessoas da sua vida. Dizer \"hoje não, sábado sim\" é escolher a prioridade sem drama.",
                verso: "Eu disse \"hoje não, irmão, sábado é sem desculpa\"",
                depois: [
                  { quem: "narrador", texto: "Guto responde com um áudio, rindo: \"Tá bom, vovô. Mas sábado é sem desculpa, hein!\"" }
                ]
              }
            ]
          }
        },

        { cena: "forja", local: "Forja · 5h" },
        { quem: "narrador", texto: "5h da manhã. Rua das Brasas, número 7. Uma porta de ferro, uma fornalha acesa e o som de um martelo que não para." },
        { quem: "tetsu", expr: "serio", texto: "Chegou. Já é alguma coisa." },
        { quem: "narrador", texto: "Tetsu entrega a Príncipe um martelo pesado e aponta para uma barra de ferro em brasa sobre a bigorna." },
        { quem: "tetsu", expr: "serio", texto: "Mil golpes. Todos iguais. Começa." },
        { quem: "narrador", texto: "No golpe cem, o ombro arde. No duzentos, a mão treme. No trezentos, o ferro ainda parece exatamente igual ao começo." },
        { quem: "principe", expr: "esforco", texto: "(Isso não tá mudando nada... Pra que tudo isso?)" },
        { quem: "sussurro", texto: "Ele está rindo de você. Isso é inútil. Ninguém aprende nada batendo sempre no mesmo lugar." },
        {
          escolha: {
            pergunta: "O braço pesa e o ferro parece igual. O que Príncipe faz?",
            opcoes: [
              {
                texto: "Bate com toda a força que tem, para terminar logo os mil golpes.",
                certa: false,
                retorno: "Força desesperada quebra o ritmo, cansa o braço e deforma o ferro. Quando a gente só quer acabar logo, para de prestar atenção no que está fazendo. Intensidade sem constância é só barulho.",
                verso: "Ela quer que eu bata forte pra acabar logo e quebrar"
              },
              {
                texto: "Diminui o ritmo, respira e passa a contar de dez em dez golpes.",
                certa: true,
                retorno: "Quando o objetivo parece grande demais, divida. Dez golpes de cada vez é algo que a mente aceita. É o ritmo constante que forja o ferro, não a força de um golpe só. Mil golpes são só cem vezes dez.",
                verso: "Cem vezes dez é mil, matemática de leão",
                depois: [
                  { quem: "narrador", texto: "Golpe quinhentos. Setecentos. Novecentos e noventa e nove. Mil." },
                  { quem: "narrador", texto: "O ferro, que parecia não mudar nunca, agora tem a forma de uma lâmina." },
                  { quem: "tetsu", expr: "aprova", texto: "Percebeu? Nenhum golpe sozinho fez a lâmina. Mas, sem cada um deles, ela não existiria." },
                  { quem: "tetsu", expr: "aprova", texto: "Isso é disciplina, moleque. Não é ter vontade. É voltar. Amanhã, cinco horas. E depois de amanhã também." }
                ]
              },
              {
                texto: "Pede ao Tetsu para pular para uma parte do treino mais útil.",
                certa: false,
                retorno: "Procurar um atalho no meio do esforço é o Senhor Amanhã falando por você. A parte \"útil\" só existe por causa das repetições chatas. O mestre não está escondendo o atalho: ele não existe.",
                verso: "Ou que eu implore um atalho que não existe pra pular"
              }
            ]
          }
        },

        { quem: "narrador", texto: "Príncipe olha o pulso. A marca recuou. Pouco, mas recuou." },
        { quem: "narrador", texto: "Então a chama da fornalha tremula. A porta de ferro range sozinha, e uma névoa fina entra rente ao chão da forja." },
        { quem: "amanha", expr: "gentil", texto: "Bom dia, mestre Tetsu. Quanto tempo..." },
        { quem: "amanha", expr: "convencido", texto: "Você ainda acha que consegue salvar alguém? Lembra como foi da última vez?" },
        { quem: "tetsu", expr: "bravo", texto: "...Sai da minha forja." },
        { quem: "narrador", texto: "O Senhor Amanhã sorri, toca a aba do chapéu e se desfaz na névoa. Tetsu fica em silêncio, apertando o martelo na mão." }
      ],
      licao: {
        titulo: "Disciplina é voltar",
        pontos: [
          "Falhou um dia? Nunca falhe dois seguidos. Volte hoje, sem esperar a segunda-feira.",
          "Não compense o dia perdido. Volte ao normal: hábito não é dívida.",
          "Mude por quem você quer ser, não para provar nada a ninguém.",
          "Proteja o compromisso sem cortar as pessoas: hoje não, sábado sim.",
          "Grande demais? Divida em blocos de dez. É a constância que forja, não a força."
        ]
      },
      gancho: "O que aconteceu entre Tetsu e o Senhor Amanhã? Continua no Episódio 3."
    }
  ]
};
