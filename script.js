const mensagemElemento = document.getElementById("mensagem");

const mensagemElemento2 = document.getElementById("mensagem2");

const compartilhar = document.getElementById("compartilhar");

const tentarNovamente = document.getElementById("tentarNovamente");

let guessButton = document.getElementById("guessButton");

let botaoSpoiler = document.getElementById("btn-spoiler");

let botaoInfinito = document.getElementById("btn-infinito");

let charName = document.getElementById("charName");

let tableBody = document.getElementById("tabela-corpo");

let audioAtual = null;

let balaoTimer = null;

let chuteQtn = 0;

let victoryTimer = null;

let victoryBox = document.querySelector(".victoryBox");

let xButton = document.querySelector(".xButton");

const frierenPlush = document.querySelector(".frierenChibi");

const inputBusca = document.getElementById("charName");

const balao = document.getElementById("balao-fala");

const listaPersonagens = [
  {
    nome: "Frieren",
    imagem: "./images/icons/Frieren_anime_portrait.webp",
    genero: "Feminino",
    raca: "Elfo",
    classe: "Mago",
    afiliacao: ["Grupo do Herói", "Grupo da Frieren", "Exame de Magos"],
    habilidade: "Magia de Ataque (Zoltraak)",
    status: "Vivo",
    primeira_aparicao: "Episódio 1",
  },
  {
    nome: "Himmel",
    imagem: "./images/icons/Himmel_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: ["Grupo do Herói"],
    habilidade: "Esgrima",
    status: "Morto",
    primeira_aparicao: "Episódio 1",
  },
  {
    nome: "Heiter",
    imagem: "./images/icons/Heiter_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Sacerdote",
    afiliacao: ["Grupo do Herói"],
    habilidade: "Magia Sagrada",
    status: "Morto",
    primeira_aparicao: "Episódio 1",
  },
  {
    nome: "Eisen",
    imagem: "./images/icons/Eisen_anime_portrait.webp",
    genero: "Masculino",
    raca: "Anão",
    classe: "Guerreiro",
    afiliacao: ["Grupo do Herói"],
    habilidade: "Combate com Machado",
    status: "Vivo",
    primeira_aparicao: "Episódio 1",
  },
  {
    nome: "Fern",
    imagem: "./images/icons/Fern_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: [
      "Grupo da Frieren",
      "Exame de Magos",
      "Assosiação Mágica Continental",
    ],
    habilidade: "Magia de Ataque Rápida",
    status: "Vivo",
    primeira_aparicao: "Episódio 1",
  },
  {
    nome: "Stark",
    imagem: "./images/icons/Stark_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: ["Grupo da Frieren"],
    habilidade: "Corte Destrutivo",
    status: "Vivo",
    primeira_aparicao: "Episódio 5",
  },
  {
    nome: "Flamme",
    imagem: "./images/icons/Flamme_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["N/A"],
    habilidade: "Supressão de Mana",
    status: "Morto",
    primeira_aparicao: "Episódio 4",
  },
  {
    nome: "Qual",
    imagem: "./images/icons/Qual_anime_portrait.webp",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: ["Exército do Rei Demônio"],
    habilidade: "Zoltraak Original",
    status: "Morto",
    primeira_aparicao: "Episódio 3",
  },
  {
    nome: "Rei Demônio",
    imagem: "./images/icons/Demon_king.webp",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Desconhecido",
    afiliacao: ["Exército do Rei Demônio"],
    habilidade: "Desconhecido",
    status: "Morto",
    primeira_aparicao: "Episódio 1",
  },
  {
    nome: "Aura",
    imagem: "./images/icons/Aura_anime_portrait.webp",
    genero: "Feminino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: ["Sete Sábios da Destruição", "Exército do Rei Demônio"],
    habilidade: "Magia de Obediência",
    status: "Morto",
    primeira_aparicao: "Episódio 7",
  },
  {
    nome: "Lugner",
    imagem: "./images/icons/Lugner_anime_portrait.webp",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: ["Exército do Rei Demônio", "Algoz de Aura"],
    habilidade: "Magia de Sangue",
    status: "Morto",
    primeira_aparicao: "Episódio 7",
  },
  {
    nome: "Linie",
    imagem: "./images/icons/Linie_anime_portrait.webp",
    genero: "Feminino",
    raca: "Demônio",
    classe: "Guerreiro",
    afiliacao: ["Exército do Rei Demônio", "Algoz de Aura"],
    habilidade: "Cópia de Movimentos",
    status: "Morto",
    primeira_aparicao: "Episódio 7",
  },
  {
    nome: "Draht",
    imagem: "./images/icons/Draht_anime_portrait.webp",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: ["Exército do Rei Demônio", "Algoz de Aura"],
    habilidade: "Fios de Magia",
    status: "Morto",
    primeira_aparicao: "Episódio 7",
  },
  {
    nome: "Conde Granat",
    imagem: "./images/icons/Graf_Granat_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: ["Domínio do Conde Granat"],
    habilidade: "Governança",
    status: "Vivo",
    primeira_aparicao: "Episódio 7",
  },
  {
    nome: "Kraft",
    imagem: "./images/icons/Kraft_anime_portrait.webp",
    genero: "Masculino",
    raca: "Elfo",
    classe: "Monge",
    afiliacao: ["N/A"],
    habilidade: "Artes Marciais",
    status: "Vivo",
    primeira_aparicao: "Episódio 11",
  },
  {
    nome: "Deusa da Criação",
    imagem: "./images/icons/Goddess_of_Creation.webp",
    genero: "Feminino",
    raca: "N/A",
    classe: "N/A",
    afiliacao: ["N/A"],
    habilidade: "Onipotência",
    status: "Vivo",
    primeira_aparicao: "Episódio 12",
  },
  {
    nome: "Sein",
    imagem: "./images/icons/Sein_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Sacerdote",
    afiliacao: ["Grupo da Frieren"],
    habilidade: "Magia de Cura Avançada",
    status: "Vivo",
    primeira_aparicao: "Episódio 13",
  },
  {
    nome: "Gorilla",
    imagem: "./images/icons/Gorilla_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: ["Guerreiros das Sombras"],
    habilidade: "Força Bruta",
    status: "Vivo",
    primeira_aparicao: "Episódio 13",
  },
  {
    nome: "Lawine",
    imagem: "./images/icons/Lawine_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Academia de Magia", "Exame de Magos"],
    habilidade: "Magia de Gelo (Sagittas)",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Kanne",
    imagem: "./images/icons/Kanne_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Academia de Magia", "Exame de Magos"],
    habilidade: "Manipulação de Água",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Ubel",
    imagem: "./images/icons/%C3%9Cbel_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Magia de Corte (Reelseiden)",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Land",
    imagem: "./images/icons/Land_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Clonagem Perfeita",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Wirbel",
    imagem: "./images/icons/Wirbel_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Tropa Mágica do Norte", "Exame de Magos"],
    habilidade: "Magia de Imobilização(Sorganeil)",
    status: "Vivo",
    primeira_aparicao: "Episódio 19",
  },
  {
    nome: "Scharf",
    imagem: "./images/icons/Scharf_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Manipulação de Pétalas de Aço",
    status: "Vivo",
    primeira_aparicao: "Episódio 19",
  },
  {
    nome: "Ehre",
    imagem: "./images/icons/Ehre_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Academia de Magia", "Exame de Magos"],
    habilidade: "Manipulação de Pedras",
    status: "Vivo",
    primeira_aparicao: "Episódio 19",
  },
  {
    nome: "Denken",
    imagem: "./images/icons/Denken_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Magos Imperiais", "Exame de Magos"],
    habilidade: "Magia de Fogo / Combate Físico",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Richter",
    imagem: "./images/icons/Richter_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Manipulação de Terra",
    status: "Vivo",
    primeira_aparicao: "Episódio 19",
  },
  {
    nome: "Laufen",
    imagem: "./images/icons/Laufen_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Magia de Velocidade (Jilwer)",
    status: "Vivo",
    primeira_aparicao: "Episódio 19",
  },
  {
    nome: "Genau",
    imagem: "./images/icons/Genau_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Assosiação Mágica Continental", "Exame de Magos"],
    habilidade: "Magia de Penas Negras",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Edel",
    imagem: "./images/icons/Edel_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Magia Mental",
    status: "Vivo",
    primeira_aparicao: "Episódio 19",
  },
  {
    nome: "Blei",
    imagem: "./images/icons/Blei_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Magia de Projéteis",
    status: "Vivo",
    primeira_aparicao: "Episódio 19",
  },
  {
    nome: "Dunste",
    imagem: "./images/icons/Dunste_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Magia de Barreira",
    status: "Vivo",
    primeira_aparicao: "Episódio 19",
  },
  {
    nome: "Ton",
    imagem: "./images/icons/Ton_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Magia de Ilusão",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Lange",
    imagem: "./images/icons/Lange_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos"],
    habilidade: "Magia de Radar",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Methode",
    imagem: "./images/icons/Methode_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Exame de Magos", "Assosiação Mágica Continental"],
    habilidade: "Magia Multiuso / Restrição",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Sense",
    imagem: "./images/icons/Sense_anime_portrait.webp",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Assosiação Mágica Continental", "Exame de Magos"],
    habilidade: "Manipulação de Cabelo",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Lernen",
    imagem: "./images/icons/Lernen_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Magos Imperiais", "Assosiação Mágica Continental"],
    habilidade: "Manipulação de Golems",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Falsch",
    imagem: "./images/icons/Falsch_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: ["Assosiação Mágica Continental"],
    habilidade: "Magia de Projeção",
    status: "Vivo",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Serie",
    imagem: "./images/icons/Serie_anime_portrait.webp",
    genero: "Feminino",
    raca: "Elfo",
    classe: "Mago",
    afiliacao: ["Assosiação Mágica Continental"],
    habilidade: "Conhecimento de Todas as Magias",
    status: "Vivo",
    primeira_aparicao: "Episódio 20",
  },
  {
    nome: "Bose",
    imagem: "./images/icons/Bose_anime_portrait.webp",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: ["Sete Sábios da Destruição", "Exército do Rei Demônio"],
    habilidade: "Magia de Barreira Eterna",
    status: "Morto",
    primeira_aparicao: "Episódio 18",
  },
  {
    nome: "Hero of the South",
    imagem: "./images/icons/Hero_of_the_South_anime_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: ["N/A"],
    habilidade: "Previsão do Futuro",
    status: "Morto",
    primeira_aparicao: "Episódio 30",
  },
  {
    nome: "Shlacht",
    imagem: "./images/icons/Schlacht_anime_profile.webp",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: ["Exército do Rei Demônio"],
    habilidade: "Previsão do Futuro",
    status: "Morto",
    primeira_aparicao: "Episódio 30",
  },
  {
    nome: "Revolte",
    imagem: "./images/icons/Revolte_anime_portrait.webp",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Guerreiro",
    afiliacao: ["Exército do Rei Demônio"],
    habilidade: "Shingi no Saiken",
    status: "Morto",
    primeira_aparicao: "Episódio 35",
  },
  
  /* Mangá */

  {
    nome: "Macht",
    imagem: "./images/icons/Macht_anime_portrait.webp",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: ["Sete Sábios da Destruição", "Exército do Rei Demônio"],
    habilidade: "Diagolze",
    status: "Morto",
    primeira_aparicao: "Capítulo 77",
    spoiler: "true",
  },
  {
    nome: "Grausam",
    imagem: "./images/icons/Grausam_manga_portrait.webp",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: ["Sete Sábios da Destruição", "Exército do Rei Demônio"],
    habilidade: "Ansehelschella",
    status: "Morto",
    primeira_aparicao: "Capítulo 89",
    spoiler: "true",
  },
  {
    nome: "Solitär",
    imagem: "./images/icons/Solitar_manga_portrait.webp",
    genero: "Feminino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: ["N/A"],
    habilidade: "Manipulação de Mana",
    status: "Morto",
    primeira_aparicao: "Capítulo 88",
    spoiler: "true",
  },
  {
    nome: "Gluck",
    imagem: "./images/icons/Gluck_manga_portrait.webp",
    genero: "Masculino",
    raca: "Humano",
    classe: "N/A",
    afiliacao: ["Cidade Fortificada de Weise"],
    habilidade: "N/A",
    status: "Vivo",
    primeira_aparicao: "Capítulo 90",
    spoiler: "true",
  },
  {
    nome: "Tot",
    genero: "Feminino",
    raca: "Demônio",
    classe: "Mago",
    afiliacao: "Exército do Rei Demônio",
    status: "Viva",
    primeira_aparicao: "Capítulo 116",
    habilidade: "Maldição do Fim Planetário",
    imagem: "./images/icons/Tot_manga_portrait.webp",
    spoiler: "true",
  },
  {
    nome: "Rivale",
    genero: "Masculino",
    raca: "Demônio",
    classe: "Guerreiro",
    afiliacao: "Exército do Rei Demônio",
    status: "Vivo",
    primeira_aparicao: "Capítulo 116",
    habilidade: "Força Sobre-humana",
    imagem: "./images/icons/Rivale_manga_portrait.webp",
    spoiler: "true",
  },
  {
    nome: "Radaal",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: "Guerreiros das Sombras",
    status: "Vivo",
    primeira_aparicao: "Capítulo 124",
    habilidade: "Técnicas de Assassinato",
    imagem: "./images/icons/Radaal_manga_portrait.webp",
    spoiler: "true",
  },
  {
    nome: "Kanone",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: "Forças Especiais Mágicas",
    status: "Viva",
    primeira_aparicao: "Capítulo 126",
    habilidade: "Magia Imperial",
    imagem: "./images/icons/Kanone_manga_portrait.webp",
    spoiler: "true",
  },
  {
    nome: "Neu",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: "Forças Especiais Mágicas",
    status: "Vivo",
    primeira_aparicao: "Capítulo 127",
    habilidade: "Magia Imperial",
    imagem: "./images/icons/Neu_manga_portrait.webp",
    spoiler: "true",
  },
  {
    nome: "Weg",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: "Forças Especiais Mágicas",
    status: "Vivo",
    primeira_aparicao: "Capítulo 128",
    habilidade: "Magia Imperial",
    imagem: "./images/icons/Weg_manga_portrait.webp",
    spoiler: "true",
  },
  {
    nome: "Lager",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: "Forças Especiais Mágicas",
    status: "Vivo",
    primeira_aparicao: "Capítulo 141",
    habilidade: "Magia Imperial",
    imagem: "./images/icons/lager.webp",
    spoiler: "true",
  },
  {
    nome: "Grau",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: "Forças Especiais Mágicas",
    status: "Vivo",
    primeira_aparicao: "Capítulo 141",
    habilidade: "Magia Imperial",
    imagem: "./images/icons/grau.webp",
    spoiler: "true",
  },
  {
    nome: "Fräse",
    genero: "Feminino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: "Forças Especiais Mágicas",
    status: "Viva",
    primeira_aparicao: "Capítulo 130",
    habilidade: "Magia Imperial",
    imagem: "./images/icons/frase.webp",
    spoiler: "true",
  },
  {
    nome: "Lowe",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: "Guerreiros das Sombras",
    status: "Vivo",
    primeira_aparicao: "Capítulo 127",
    habilidade: "Técnicas de Assassinato",
    imagem: "./images/icons/lowe.webp",
    spoiler: "true",
  },
  {
    nome: "Lehrer",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: "Guerreiros das Sombras",
    status: "Vivo",
    primeira_aparicao: "Capítulo 127",
    habilidade: "Técnicas de Assassinato",
    imagem: "./images/icons/lehrer.webp",
    spoiler: "true",
  },
  {
    nome: "Schritt",
    genero: "Feminino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: "Guerreiros das Sombras",
    status: "Viva",
    primeira_aparicao: "Capítulo 129",
    habilidade: "Técnicas de Assassinato",
    imagem: "./images/icons/schritt.webp",
    spoiler: "true",
  },
  {
    nome: "Wolf",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: "Guerreiros das Sombras",
    status: "Vivo",
    primeira_aparicao: "Capítulo 129",
    habilidade: "Técnicas de Assassinato",
    imagem: "./images/icons/wolf.webp",
    spoiler: "true",
  },
  {
    nome: "Iris",
    genero: "Feminino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: "Guerreiros das Sombras",
    status: "Viva",
    primeira_aparicao: "Capítulo 129",
    habilidade: "Técnicas de Assassinato",
    imagem: "./images/icons/iris.webp",
    spoiler: "true",
  },
  {
    nome: "Routine",
    genero: "Feminino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: "Guerreiros das Sombras",
    status: "Viva",
    primeira_aparicao: "Capítulo 129",
    habilidade: "Técnicas de Assassinato",
    imagem: "./images/icons/routine.webp",
    spoiler: "true",
  },
  {
    nome: "Clematis",
    genero: "Masculino",
    raca: "Humano",
    classe: "Sacerdote",
    afiliacao: "Guerreiros das Sombras",
    status: "Vivo",
    primeira_aparicao: "Capítulo 129",
    habilidade: "Magia da Deusa",
    imagem: "./images/icons/clematis.webp",
    spoiler: "true",
  },
  {
    nome: "Lore",
    genero: "Feminino",
    raca: "Humano",
    classe: "Sacerdote",
    afiliacao: "Guerreiros das Sombras",
    status: "Viva",
    primeira_aparicao: "Capítulo 129",
    habilidade: "Magia da Deusa",
    imagem: "./images/icons/lore.webp",
    spoiler: "true",
  },
  {
    nome: "Wehrlos",
    genero: "Masculino",
    raca: "Anão",
    classe: "Guerreiro",
    afiliacao: "Guerreiros das Sombras",
    status: "Vivo",
    primeira_aparicao: "Capítulo 129",
    habilidade: "Super Durabilidade",
    imagem: "./images/icons/wehrlos.webp",
    spoiler: "true",
  },
  {
    nome: "Gazelle",
    genero: "Masculino",
    raca: "Humano",
    classe: "Guerreiro",
    afiliacao: "Guerreiros das Sombras",
    status: "Vivo",
    primeira_aparicao: "Capítulo 129",
    habilidade: "Magia Imperial",
    imagem: "./images/icons/gazelle.webp",
    spoiler: "true",
  },
  {
    nome: "Emperor",
    genero: "Masculino",
    raca: "Humano",
    classe: "Mago",
    afiliacao: "Império",
    status: "Vivo",
    primeira_aparicao: "Capítulo 142",
    habilidade: "Magia Mental",
    imagem: "./images/icons/emperor.webp",
    spoiler: "true",
  },
  {
    nome: "Minus",
    genero: "Feminino",
    raca: "Elfo",
    classe: "Mago",
    afiliacao: "N/A",
    status: "Viva",
    primeira_aparicao: "Capítulo 133",
    habilidade: "Coluna de Luz",
    imagem: "./images/icons/minus.webp",
    spoiler: "true",
  },
];

const LISTA_ANIME_FIXA = listaPersonagens.filter((p) => !p.spoiler);
const LISTA_COMPLETA_FIXA = listaPersonagens;

let modoSpoiler = false;
let modoInfinito = false;

const hoje = new Date().toDateString();
const dataSalva = localStorage.getItem("data_jogo");

if (dataSalva !== hoje) {
  localStorage.removeItem("chutes_normal");
  localStorage.removeItem("chutes_spoiler");
  localStorage.removeItem("chutes_frierendle");
  localStorage.removeItem("qnt_chutes");
  localStorage.removeItem("qnt_chutes_normal");
  localStorage.removeItem("qnt_chutes_spoiler");
  localStorage.setItem("data_jogo", hoje);
}

let chutesNormal = (JSON.parse(localStorage.getItem("chutes_normal")) || []).filter(
  (personagem) => !personagem.spoiler,
);
let chutesSpoiler = JSON.parse(localStorage.getItem("chutes_spoiler")) || [];
let ultimoPersonagemInfinito = null;
let tentativasRodada = 0;

function obterListaModoAtual() {
  return modoSpoiler ? LISTA_COMPLETA_FIXA : LISTA_ANIME_FIXA;
}

function obterChaveQuantidadeChutes() {
  return modoSpoiler ? "qnt_chutes_spoiler" : "qnt_chutes_normal";
}

function escolherPersonagemInfinito() {
  const lista = obterListaModoAtual();
  const candidatos = lista.filter(
    (personagem) => personagem.nome !== ultimoPersonagemInfinito,
  );
  const listaSorteio = candidatos.length ? candidatos : lista;
  return listaSorteio[Math.floor(Math.random() * listaSorteio.length)];
}

function escolherPersonagemDiario(lista, deslocamento = 0) {
  const indiceAgenda = (semente + deslocamento) % LISTA_COMPLETA_FIXA.length;
  return lista[indiceAgenda % lista.length];
}

function esconderVictoryBox() {
  if (victoryTimer) {
    clearTimeout(victoryTimer);
    victoryTimer = null;
  }

  victoryBox.classList.add("oculto");
  victoryBox.classList.add("float");
  tentarNovamente.classList.add("oculto");
  document
    .getElementById("countdown-container")
    .classList.toggle("oculto", modoInfinito);
  mensagemElemento.innerHTML = "";
  mensagemElemento2.innerHTML = "";
}

function exibirVictoryBox() {
  victoryBox.classList.add("float");
  victoryBox.classList.remove("oculto");
}

function resetarRodadaInfinita() {
  ultimoPersonagemInfinito = personagemDoDia ? personagemDoDia.nome : null;
  personagemDoDia = escolherPersonagemInfinito();
  personagensChutados = [];
  tentativasRodada = 0;
  chuteQtn = 0;
  tableBody.innerHTML = "";
  inputBusca.disabled = false;
  inputBusca.placeholder = "Digite o personagem aqui...";
  inputBusca.value = "";
  esconderVictoryBox();
  console.log("Alvo infinito:", personagemDoDia.nome);
}

function carregarModoDeJogo() {
  esconderVictoryBox();
  inputBusca.disabled = false;
  inputBusca.placeholder = "Digite o personagem aqui...";
  inputBusca.value = "";
  sugestoesBox.innerHTML = "";
  sugestoesBox.classList.add("oculto");
  // 1. Define o personagem do dia baseado no modo
  if (modoSpoiler === false) {
    const listaAnime = listaPersonagens.filter((p) => !p.spoiler);
    personagemDoDia = modoInfinito
      ? escolherPersonagemInfinito()
      : escolherPersonagemDiario(LISTA_ANIME_FIXA);
    personagensChutados = chutesNormal; // Aponta para o histórico normal
  } else {
    personagemDoDia = modoInfinito
      ? escolherPersonagemInfinito()
      : escolherPersonagemDiario(LISTA_COMPLETA_FIXA, 1);
    personagensChutados = chutesSpoiler; // Aponta para o histórico spoiler
  }

  // 2. Limpa a tabela atual e renderiza o histórico do modo escolhido
  if (modoInfinito) {
    personagensChutados = [];
    tentativasRodada = 0;
    chuteQtn = 0;
  } else {
    chuteQtn = personagensChutados.length;
  }

  renderizarChutesSalvos();
  atualizarContagemRegressiva();

  // 3. Opcional: Fechar a victoryBox se o jogador ainda não ganhou nesse modo
  // verificarStatusVitoria();
}

botaoSpoiler.addEventListener("click", () => {
  modoSpoiler = !modoSpoiler;
  botaoSpoiler.innerText = modoSpoiler ? "Modo: Mangá" : "Modo: Anime";
  console.log(personagemDoDia.nome);

  if (modoSpoiler) {
    document.querySelector("body").classList.add("backgroundManga");
    document.querySelectorAll("button").forEach(botao => {
        botao.classList.add("buttonManga")
    })
    document.querySelector(".indicadorCor").classList.add("indicadorCorManga")
    document.querySelector(".victoryBox").classList.add("victoryBoxManga")
    document.querySelector("input").classList.add("inputManga")
    document.querySelector(".mensagem").classList.add("mensagemManga")
    document.querySelector(".mensagem2").classList.add("mensagemManga2")
    document.querySelector(".compartilhar").classList.add("compartilharManga")
    document.querySelector(".tentarNovamente").classList.add("tentarNovamenteManga")
    document.getElementById("countdown-container").classList.add("countdownManga")
    document.querySelector(".sugestoes-wrapper").classList.add("sugestoes-wrapperManga")
    document.querySelectorAll("th").forEach(th => {
        th.classList.add("thManga")
    })
    // document.querySelector(".sugestao-item").classList.add("sugestao-itemManga")
  } else {
    document.querySelector("body").classList.remove("backgroundManga");
     document.querySelectorAll("button").forEach(botao => {
        botao.classList.remove("buttonManga")
    })
    document.querySelector(".indicadorCor").classList.remove("indicadorCorManga")
    document.querySelector(".victoryBox").classList.remove("victoryBoxManga")
    document.querySelector("input").classList.remove("inputManga")
    document.querySelector(".mensagem").classList.remove("mensagemManga")
    document.querySelector(".mensagem2").classList.remove("mensagemManga2")
    document.querySelector(".compartilhar").classList.remove("compartilharManga")
    document.querySelector(".tentarNovamente").classList.remove("tentarNovamenteManga")
    document.getElementById("countdown-container").classList.remove("countdownManga")
    document.querySelectorAll("th").forEach(th => {
        th.classList.remove("thManga")
    })

  }

  carregarModoDeJogo();
});

botaoInfinito.addEventListener("click", () => {
  modoInfinito = !modoInfinito;
  botaoInfinito.innerText = modoInfinito ? "Modo: Infinito" : "Modo: Diario";
  carregarModoDeJogo();
});

const semente =
  new Date().getFullYear() * 10000 +
  (new Date().getMonth() + 1) * 100 +
  new Date().getDate();

let personagemDoDia;

if (modoSpoiler === false) {
  const listaAnime = listaPersonagens.filter((p) => !p.spoiler);
  personagemDoDia = escolherPersonagemDiario(listaAnime);
  console.log("teste false");
} else {
  personagemDoDia = escolherPersonagemDiario(listaPersonagens, 1);
  console.log("teste true");
}

console.log(`O personagem do dia é ${personagemDoDia.nome}`);

function renderizarChutesSalvos() {
  const tabelaCorpo = document.getElementById("tabela-corpo");

  tabelaCorpo.innerHTML = "";

  personagensChutados.forEach((personagemEncontrado) => {
    const epChutado = extrairEpisodio(personagemEncontrado.primeira_aparicao);
    const epAlvo = extrairEpisodio(personagemDoDia.primeira_aparicao);

    let seta = "";
    if (epChutado < epAlvo) seta = " ⬆️";
    else if (epChutado > epAlvo) seta = " ⬇️";

    const novaLinha = tabelaCorpo.insertRow(0);

    novaLinha.innerHTML = `
            <td style="padding-top:10px; padding-bottom:5px;"><img src="${personagemEncontrado.imagem}" class="icons">${personagemEncontrado.nome}</td>
            <td class="${comparar(personagemEncontrado.genero, personagemDoDia.genero)}">${formatarValor(personagemEncontrado.genero)}</td>
            <td class="${comparar(personagemEncontrado.raca, personagemDoDia.raca)}">${formatarValor(personagemEncontrado.raca)}</td>
            <td class="${comparar(personagemEncontrado.classe, personagemDoDia.classe)}">${formatarValor(personagemEncontrado.classe)}</td>
            <td class="${comparar(personagemEncontrado.afiliacao, personagemDoDia.afiliacao)}">${formatarValor(personagemEncontrado.afiliacao)}</td>
            <td class="${comparar(personagemEncontrado.status, personagemDoDia.status)}">${formatarValor(personagemEncontrado.status)}</td>
            <td class="${comparar(personagemEncontrado.primeira_aparicao, personagemDoDia.primeira_aparicao)}">${formatarValor(personagemEncontrado.primeira_aparicao)}${seta}</td>
            <td class="${comparar(personagemEncontrado.habilidade, personagemDoDia.habilidade)}">${formatarValor(personagemEncontrado.habilidade)}</td>
            <td>${gerarIconeResultado(personagemEncontrado, personagemDoDia)}</td>
        `;

    if (
      personagemEncontrado.nome.toLowerCase() ===
      personagemDoDia.nome.toLowerCase()
    ) {
      inputBusca.disabled = true;
      inputBusca.placeholder = "Você já acertou! Volte amanhã.";
      let qntChuteStorage =
        localStorage.getItem(obterChaveQuantidadeChutes()) ||
        personagensChutados.length;

      victoryTimer = setTimeout(() => {
        document
          .getElementById("countdown-container")
          .classList.remove("oculto");
        tentarNovamente.classList.add("oculto");
        mensagemElemento.innerHTML = `<h2>Você acertou! <br>✨ O personagem era <span style="color: #7C7BEF;">${personagemDoDia.nome}</span>! ✨</h2>`;
        mensagemElemento2.innerHTML = `<h2> Você acertou em <span style="color: #7C7BEF;">${qntChuteStorage} tentativas</span>!</h2>`;

        exibirVictoryBox();

        victoryBox.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 3.5);
      tentarNovamente.classList.add("oculto");
    }
  });
}

// const personagemDoDia = listaPersonagens[semente % listaPersonagens.length];

// const personagemDoDia = listaPersonagens[Math.floor(Math.random() * listaPersonagens.length)];

let personagensChutados = chutesNormal;
chuteQtn = personagensChutados.length;
renderizarChutesSalvos();

function victoryWindow() {
  mensagemElemento.innerHTML = `<h2>Você acertou! <br>✨ O personagem era <span style="color: #7C7BEF;">${personagemDoDia.nome}</span>! ✨</h2>`;
  mensagemElemento2.innerHTML = `<h2> Você acertou em <span style="color: #7C7BEF;">${chuteQtn} tentativas</span>!</h2>`;

  victoryBox.classList.remove("oculto");

  victoryBox.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

console.log("O alvo de hoje é:", personagemDoDia.nome);

function Guess() {
  let nomeDigitado = charName.value;

  const listaDisponivel = obterListaModoAtual();
  const personagemEncontrado = listaDisponivel.find(
    (p) => p.nome.toLowerCase() === nomeDigitado.toLowerCase(),
  );

  if (!personagemEncontrado) {
    alert("Personagem não encontrado!");
    return;
  }

  const jaChutado = personagensChutados.some(
    (personagem) =>
      personagem.nome.toLowerCase() === personagemEncontrado.nome.toLowerCase(),
  );

  if (jaChutado) {
    alert("Você já tentou esse personagem...");
    return;
  } else {
    chuteQtn++;
    tentativasRodada++;
    personagensChutados.push(personagemEncontrado);
  }
  if (!modoInfinito) {
    localStorage.setItem(obterChaveQuantidadeChutes(), chuteQtn);
    const chaveStorage = modoSpoiler ? "chutes_spoiler" : "chutes_normal";
    localStorage.setItem(chaveStorage, JSON.stringify(personagensChutados));
    localStorage.setItem("data_jogo", hoje);
    if (modoSpoiler) {
      chutesSpoiler = personagensChutados;
    } else {
      chutesNormal = personagensChutados;
    }
  }

  const tabelaCorpo = document.getElementById("tabela-corpo");

  if (personagemEncontrado) {
    const epChutado = extrairEpisodio(personagemEncontrado.primeira_aparicao);
    const epAlvo = extrairEpisodio(personagemDoDia.primeira_aparicao);

    let seta = "";
    if (epChutado < epAlvo) seta = " ⬆️";
    else if (epChutado > epAlvo) seta = " ⬇️";

    const novaLinha = tabelaCorpo.insertRow(0);

    novaLinha.innerHTML = `
    <td style="padding-top:10px; padding-bottom:5px;"><img src="${personagemEncontrado.imagem}" class="icons">${personagemEncontrado.nome}</td>
    <td class="${comparar(personagemEncontrado.genero, personagemDoDia.genero)}">${formatarValor(personagemEncontrado.genero)}</td>
    <td class="${comparar(personagemEncontrado.raca, personagemDoDia.raca)}">${formatarValor(personagemEncontrado.raca)}</td>
    <td class="${comparar(personagemEncontrado.classe, personagemDoDia.classe)}">${formatarValor(personagemEncontrado.classe)}</td>
    <td class="${comparar(personagemEncontrado.afiliacao, personagemDoDia.afiliacao)}">${formatarValor(personagemEncontrado.afiliacao)}</td>
    <td class="${comparar(personagemEncontrado.status, personagemDoDia.status)}">${formatarValor(personagemEncontrado.status)}</td>
    <td class="${comparar(personagemEncontrado.primeira_aparicao, personagemDoDia.primeira_aparicao)}">${formatarValor(personagemEncontrado.primeira_aparicao)}${seta}</td>
    <td class="${comparar(personagemEncontrado.habilidade, personagemDoDia.habilidade)}">${formatarValor(personagemEncontrado.habilidade)}</td>
    <td>${gerarIconeResultado(personagemEncontrado, personagemDoDia)}</td>
`;

    if (
      personagemEncontrado.nome.toLowerCase() ===
      personagemDoDia.nome.toLowerCase()
    ) {
      let yay = new Audio("./audio/kids-saying-yay-sound-effect_3.mp3");
      yay.volume = 0.2;
      yay.play();
      balao.innerText = "YAAAAAAAY 🥳";
      balao.classList.remove("oculto");
      setTimeout(() => {
        balao.classList.add("oculto");
      }, 5000);
      frierenPlush.classList.add("shake");
      inputBusca.disabled = true;
      inputBusca.placeholder = "Você já acertou! Volte amanhã.";

      inputBusca.value = "";
      if (modoInfinito) {
        inputBusca.placeholder = "Clique em Tentar novamente...";
      }
      const tentativasVitoria = modoInfinito ? tentativasRodada : chuteQtn;
      if (modoInfinito) {
        chuteQtn = tentativasVitoria;
      }

      setTimeout(() => {
        if (modoInfinito) {
          document
            .getElementById("countdown-container")
            .classList.add("oculto");
        } else {
          document
            .getElementById("countdown-container")
            .classList.remove("oculto");
        }
        mensagemElemento.innerHTML = `<h2>Você acertou! <br>✨ O personagem era <span style="color: #7C7BEF;">${personagemDoDia.nome}</span>! ✨</h2>`;
        mensagemElemento2.innerHTML = `<h2> Você acertou em <span style="color: #7C7BEF;">${chuteQtn} tentativas</span>!</h2>`;
        // compartilhar.innerHTML = `<h2> Compartilhar </h2>`

        exibirVictoryBox();

        victoryBox.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        if (modoInfinito) {
          tentarNovamente.classList.remove("oculto");
        } else {
          tentarNovamente.classList.add("oculto");
        }
      }, 3.2);
    } else {
      novaLinha.classList.add("shake-row");
      setTimeout(() => {
        novaLinha.classList.remove("shake-row");
      }, 400);
    }
  } else {
    alert("Esse personagem não está na nossa base de dados! ");
  }
}

function gerarIconeResultado(chutado, alvo) {
  if (chutado.nome.toLowerCase() === alvo.nome.toLowerCase()) {
    return '<i class="fa-solid fa-check" style="color: #63e6be;"></i>';
  } else {
    return '<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>';
  }
}

function normalizarListaValores(valor) {
  const lista = Array.isArray(valor) ? valor : [valor];

  return lista
    .filter((item) => item !== undefined && item !== null)
    .map((item) => String(item).trim())
    .filter(Boolean);
}

function formatarValor(valor) {
  return normalizarListaValores(valor).join(", ");
}

function comparar(valorChutado, valorAlvo) {
  const listaChutado = normalizarListaValores(valorChutado);
  const listaAlvo = normalizarListaValores(valorAlvo);
  const chaveChutado = [...listaChutado].sort().join(",");
  const chaveAlvo = [...listaAlvo].sort().join(",");

  if (chaveChutado === chaveAlvo) {
    return "correto";
  }

  const temInterseccao = listaChutado.some((item) => listaAlvo.includes(item));

  if (temInterseccao) {
    return "parcial";
  }

  return "errado";
}

function compararAfiliacao(chutado, alvo) {
  return comparar(chutado, alvo);
}

function carregarSugestoes() {
  const datalist = document.getElementById("personagens-sugestoes");

  datalist.innerHTML = "";

  listaPersonagens.forEach((personagem) => {
    const opcao = document.createElement("option");
    opcao.value = personagem.nome;
    datalist.appendChild(opcao);
  });
}

function extrairEpisodio(texto) {
  const valor = Array.isArray(texto) ? texto[0] : texto;
  return parseInt(String(valor).replace(/\D/g, ""));
}

const falaFrierenMouseEnter = new Audio(
  "./audio/HUH - AUDIO FROM JAYUZUMI.COM.mp3",
);

function tocarFala() {
  falaFrierenMouseEnter.currentTime = 0;
  falaFrierenMouseEnter.play();
}

let quoteList = [
  {
    audio: new Audio("./audio/sousou-no-frieren-kurai-yo-kowai-yo.mp3"),
    texto: "Kurai yo! Kowai yo!",
  },
  {
    audio: new Audio("./audio/DO YOU LIKE MAGIC - AUDIO FROM JAYUZUMI.COM.mp3"),
    texto: "Do you like magic?",
  },
  {
    audio: new Audio(
      "./audio/I DOUBT THE GODESS WILL FORGIVE YOU - AUDIO FROM JAYUZUMI.COM.mp3",
    ),
    texto: "I doubt the goddes will forgive you...",
  },
  {
    audio: new Audio(
      "./audio/THE ERA METEOR SHOWER - AUDIO FROM JAYUZUMI.COM.mp3",
    ),
    texto: "The era meteor shower should be circling around soon",
  },
  {
    audio: new Audio("./audio/WHATS WRONG - AUDIO FROM JAYUZUMI.COM.mp3"),
    texto: "Whats wrong?",
  },
  { audio: new Audio("./audio/a-kiss-from-frieren.mp3"), texto: ":3 Mwa ~?" },
  {
    audio: new Audio(
      "./audio/I HARDLY KNEW ANYTHING ABOUT HIM - AUDIO FROM JAYUZUMI.COM.mp3",
    ),
    texto: "I hardly knew anything about him...",
  },
  {
    audio: new Audio(
      "./audio/I INTEND TO TRAVEL - AUDIO FROM JAYUZUMI.COM.mp3",
    ),
    texto:
      "I intend to travel around the central lands collecting new spells...",
  },
  {
    audio: new Audio("./audio/NEXT TIME THEN - AUDIO FROM JAYUZUMI.COM.mp3"),
    texto: "Next time then.",
  },
];

function randomQuoteAudio() {
  if (audioAtual) {
    audioAtual.pause();
    audioAtual.currentTime = 0;
  }

  if (balaoTimer) {
    clearTimeout(balaoTimer);
  }

  const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
  console.log(randomQuote);

  audioAtual = randomQuote.audio;

  audioAtual.currentTime = 0;
  audioAtual.volume = 0.2;
  audioAtual.play();

  balao.innerText = randomQuote.texto;
  balao.classList.remove("oculto");

  balaoTimer = setTimeout(() => {
    balao.classList.add("oculto");
  }, 5000);
}

frierenPlush.addEventListener("click", () => {
  randomQuoteAudio();
});

// ?INPUT AUTOCOMPLETE

const sugestoesBox = document.getElementById("sugestoes-box");

inputBusca.addEventListener("input", () => {
  const valor = inputBusca.value.toLowerCase();
  sugestoesBox.innerHTML = "";

  const listaDisponivel = modoSpoiler
    ? listaPersonagens
    : listaPersonagens.filter((p) => !p.spoiler);

  if (valor.length > 0) {
    const filtrados = listaDisponivel.filter((p) =>
      p.nome.toLowerCase().includes(valor),
    );

    if (filtrados.length > 0) {
      sugestoesBox.classList.remove("oculto");

      filtrados.forEach((p) => {
        const item = document.createElement("div");
        if(modoSpoiler){
            item.classList.add("sugestao-item");
            item.classList.add("sugestao-itemManga")
        }
        else{
            item.classList.add("sugestao-item");
        }
        

        item.innerHTML = `
                    <img src="${p.imagem}" alt="${p.nome}">
                    <span>${p.nome}</span>
                `;

        item.onclick = () => {
          inputBusca.value = p.nome;
          sugestoesBox.innerHTML = "";
          sugestoesBox.classList.add("oculto");
          Guess();
          inputBusca.value = "";
        };

        sugestoesBox.appendChild(item);
      });
    } else {
      sugestoesBox.classList.add("oculto");
    }
  } else {
    sugestoesBox.classList.add("oculto");
  }
});

inputBusca.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const primeiraSugestao = sugestoesBox.querySelector(".sugestao-item");

    if (primeiraSugestao) {
      primeiraSugestao.click();
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target !== inputBusca) sugestoesBox.innerHTML = "";
});

xButton.addEventListener("click", () => {
  victoryBox.classList.remove("float");
});

function atualizarContagemRegressiva() {
  if (modoInfinito) {
    document.getElementById("countdown-container").classList.add("oculto");

    return;
  }

  document.getElementById("countdown-container").classList.remove("oculto");
  document.getElementById("timer-label").innerText = "Proximo personagem em:";
  const agora = new Date();

  const amanha = new Date();
  amanha.setDate(amanha.getDate() + 1);
  amanha.setHours(0, 0, 0, 0);

  const diferenca = amanha - agora;

  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  const formato = (num) => String(num).padStart(2, "0");

  document.getElementById("timer").innerText =
    `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;

  if (diferenca <= 0) {
    location.reload();
  }
}

setInterval(atualizarContagemRegressiva, 1000);
atualizarContagemRegressiva();

function compartilharResultado() {
  const qntChuteStorage = localStorage.getItem(obterChaveQuantidadeChutes());
  const texto = `Joguei Frierendle hoje e acertei em ${chuteQtn | qntChuteStorage} tentativas! 🌼🧝‍♀️✨\n\nJogue você também: ${window.location.href}`;

  if (navigator.share) {
    navigator.share({
      title: "Frierendle",
      text: texto,
    });
  } else {
    navigator.clipboard.writeText(texto);
    alert("Resultado copiado para a área de transferência!");
  }
}

compartilhar.addEventListener("click", () => {
  compartilharResultado();
});

tentarNovamente.addEventListener("click", () => {
  if (modoInfinito) {
    resetarRodadaInfinita();
  }
});
