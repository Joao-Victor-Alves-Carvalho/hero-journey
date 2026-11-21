// Conteúdo da Temporada 1. O app lê este arquivo.
// Cada episódio tem: cenas (narração e falas), escolhas (com retorno) e a lição.
// Para criar um episódio novo, basta adicionar um objeto em `episodios`.
//
// Tipos de passo:
//   { cena: "quarto" }                       troca o cenário de fundo
//   { quem: "narrador", texto: "..." }       narração
//   { quem: "principe", texto: "..." }       fala de um personagem (ver `personagens`)
//   { escolha: { pergunta, opcoes: [...] } } decisão; cada opção tem certa, retorno, verso e, se quiser, depois (falas extras)

window.TEMPORADA = {
  titulo: "A Névoa Cinzenta",
  numero: 1,

  personagens: {
    narrador: { nome: "" },
    principe: { nome: "Príncipe", retrato: "principe" },
    leo: { nome: "Léo", retrato: "leo" },
    voz: { nome: "???", retrato: "voz" },
    amanha: { nome: "Senhor Amanhã", retrato: "amanha" }
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
        { quem: "principe", texto: "(Hoje eu começo. Prometi ontem. E anteontem também...)" },
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
        { quem: "leo", texto: "...Desenho? Isso é coisa de quem tem tempo, moleque. Sonho é luxo." },
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
                  { quem: "leo", texto: "...Sei lá. Não teve um dia. Eu só fui deixando pra semana que vem. Aí a semana que vem virou quinze anos." }
                ]
              }
            ]
          }
        },

        { cena: "sala" },
        { quem: "narrador", texto: "19h. Príncipe chega em casa moído. Na gaveta está o caderno do projeto dele. Ele prometeu estudar hoje." },
        { quem: "principe", texto: "(Eu tô morto de cansado...)" },
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
                  { quem: "narrador", texto: "Príncipe escreve por dez minutos. Fica feio. Fica torto. Mas fica." }
                ]
              }
            ]
          }
        },

        { cena: "noite" },
        { quem: "narrador", texto: "23h. Quando ele apaga a luz, a névoa entra pela fresta da janela e toma forma." },
        { quem: "narrador", texto: "Um homem alto, de sobretudo cinza, com um relógio de bolso parado no peito. O rosto não tem traços. Só um sorriso." },
        { quem: "amanha", texto: "Muito prazer. Eu sou o Senhor Amanhã. Todo mundo me conhece. Pouca gente me reconhece." },
        { quem: "amanha", texto: "Você me venceu duas vezes hoje. Parabéns. Mas me diga, Príncipe... amanhã você vai me vencer de novo, não vai?" },
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

        { quem: "amanha", texto: "...Interessante. Faz muito tempo que alguém não me ignora." },
        { quem: "narrador", texto: "Ele se desfaz na névoa. Mas, antes de sumir, encosta um dedo frio no pulso de Príncipe." },
        { cena: "marca" },
        { quem: "narrador", texto: "Meia-noite. Uma dor gelada. No pulso de Príncipe, uma marca cinzenta em forma de ponteiro de relógio começa a brilhar." },
        { quem: "amanha", texto: "A gente se vê... amanhã." }
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
    }
  ]
};
