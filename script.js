const mensagemElemento = document.getElementById("mensagem")

const mensagemElemento2 = document.getElementById("mensagem2")

let guessButton = document.getElementById("guessButton")

let charName = document.getElementById("charName")

let tableBody = document.getElementById("tabela-corpo")

let audioAtual = null;

let balaoTimer = null

let chuteQtn = 0;

let victoryBox = document.querySelector('.victoryBox')

let xButton = document.querySelector('.xButton')

const frierenPlush = document.querySelector('.frierenChibi')

const inputBusca = document.getElementById('charName');

const balao = document.getElementById("balao-fala")



const listaPersonagens = [
    { "nome": "Frieren", "imagem": "./images/icons/Frieren_anime_portrait.webp", "genero": "Feminino", "raca": "Elfo", "classe": "Mago", "afiliacao": ["Grupo do Herói", "Grupo da Frieren", "Exame de Magos"], "habilidade": "Magia de Ataque (Zoltraak)", "status": "Vivo", "primeira_aparicao": "Episódio 1" },
    { "nome": "Himmel", "imagem": "./images/icons/Himmel_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Guerreiro", "afiliacao": ["Grupo do Herói"], "habilidade": "Esgrima", "status": "Morto", "primeira_aparicao": "Episódio 1" },
    { "nome": "Heiter", "imagem": "./images/icons/Heiter_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Sacerdote", "afiliacao": ["Grupo do Herói"], "habilidade": "Magia Sagrada", "status": "Morto", "primeira_aparicao": "Episódio 1" },
    { "nome": "Eisen", "imagem": "./images/icons/Eisen_anime_portrait.webp", "genero": "Masculino", "raca": "Anão", "classe": "Guerreiro", "afiliacao": ["Grupo do Herói"], "habilidade": "Combate com Machado", "status": "Vivo", "primeira_aparicao": "Episódio 1" },
    { "nome": "Fern", "imagem": "./images/icons/Fern_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Grupo da Frieren", "Exame de Magos", "Assosiação Mágica Continental"], "habilidade": "Magia de Ataque Rápida", "status": "Vivo", "primeira_aparicao": "Episódio 1" },
    { "nome": "Stark", "imagem": "./images/icons/Stark_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Guerreiro", "afiliacao": ["Grupo da Frieren"], "habilidade": "Corte Destrutivo", "status": "Vivo", "primeira_aparicao": "Episódio 5" },
    { "nome": "Flamme", "imagem": "./images/icons/Flamme_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["N/A"], "habilidade": "Supressão de Mana", "status": "Morto", "primeira_aparicao": "Episódio 4" },
    { "nome": "Qual", "imagem": "./images/icons/Qual_anime_portrait.webp", "genero": "Masculino", "raca": "Demônio", "classe": "Mago", "afiliacao": ["Exército do Rei Demônio"], "habilidade": "Zoltraak Original", "status": "Morto", "primeira_aparicao": "Episódio 3" },
    { "nome": "Rei Demônio", "imagem": "./images/icons/Demon_king.webp", "genero": "Masculino", "raca": "Demônio", "classe": "Desconhecido", "afiliacao": ["Exército do Rei Demônio"], "habilidade": "Desconhecido", "status": "Morto", "primeira_aparicao": "Episódio 1" },
    { "nome": "Aura", "imagem": "./images/icons/Aura_anime_portrait.webp", "genero": "Feminino", "raca": "Demônio", "classe": "Mago", "afiliacao": ["Sete Sábios da Destruição", "Exército do Rei Demônio"], "habilidade": "Magia de Obediência", "status": "Morto", "primeira_aparicao": "Episódio 7" },
    { "nome": "Lugner", "imagem": "./images/icons/Lugner_anime_portrait.webp", "genero": "Masculino", "raca": "Demônio", "classe": "Mago", "afiliacao": ["Exército do Rei Demônio", "Algoz de Aura"], "habilidade": "Magia de Sangue", "status": "Morto", "primeira_aparicao": "Episódio 7" },
    { "nome": "Linie", "imagem": "./images/icons/Linie_anime_portrait.webp", "genero": "Feminino", "raca": "Demônio", "classe": "Guerreiro", "afiliacao": ["Exército do Rei Demônio", "Algoz de Aura"], "habilidade": "Cópia de Movimentos", "status": "Morto", "primeira_aparicao": "Episódio 7" },
    { "nome": "Draht", "imagem": "./images/icons/Draht_anime_portrait.webp", "genero": "Masculino", "raca": "Demônio", "classe": "Mago", "afiliacao": ["Exército do Rei Demônio", "Algoz de Aura"], "habilidade": "Fios de Magia", "status": "Morto", "primeira_aparicao": "Episódio 7" },
    { "nome": "Conde Granat", "imagem": "./images/icons/Graf_Granat_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Guerreiro", "afiliacao": ["Domínio do Conde Granat"], "habilidade": "Governança", "status": "Vivo", "primeira_aparicao": "Episódio 7" },
    { "nome": "Kraft", "imagem": "./images/icons/Kraft_anime_portrait.webp", "genero": "Masculino", "raca": "Elfo", "classe": "Monge", "afiliacao": ["N/A"], "habilidade": "Artes Marciais", "status": "Vivo", "primeira_aparicao": "Episódio 11" },
    { "nome": "Deusa da Criação", "imagem": "./images/icons/Goddess_of_Creation.webp", "genero": "Feminino", "raca": "N/A", "classe": "N/A", "afiliacao": ["N/A"], "habilidade": "Onipotência", "status": "Vivo", "primeira_aparicao": "Episódio 12" },
    { "nome": "Sein", "imagem": "./images/icons/Sein_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Sacerdote", "afiliacao": ["Grupo da Frieren"], "habilidade": "Magia de Cura Avançada", "status": "Vivo", "primeira_aparicao": "Episódio 13" },
    { "nome": "Gorilla", "imagem": "./images/icons/Gorilla_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Guerreiro", "afiliacao": ["Guerreiros das Sombras"], "habilidade": "Força Bruta", "status": "Vivo", "primeira_aparicao": "Episódio 13" },
    { "nome": "Lawine", "imagem": "./images/icons/Lawine_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Academia de Magia", "Exame de Magos"], "habilidade": "Magia de Gelo (Sagittas)", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Kanne", "imagem": "./images/icons/Kanne_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Academia de Magia", "Exame de Magos"], "habilidade": "Manipulação de Água", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Ubel", "imagem": "./images/icons/%C3%9Cbel_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Magia de Corte (Reelseiden)", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Land", "imagem": "./images/icons/Land_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Clonagem Perfeita", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Wirbel", "imagem": "./images/icons/Wirbel_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Tropa Mágica do Norte", "Exame de Magos"], "habilidade": "Magia de Imobilização(Sorganeil)", "status": "Vivo", "primeira_aparicao": "Episódio 19" },
    { "nome": "Scharf", "imagem": "./images/icons/Scharf_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Manipulação de Pétalas de Aço", "status": "Vivo", "primeira_aparicao": "Episódio 19" },
    { "nome": "Ehre", "imagem": "./images/icons/Ehre_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Academia de Magia", "Exame de Magos"], "habilidade": "Manipulação de Pedras", "status": "Vivo", "primeira_aparicao": "Episódio 19" },
    { "nome": "Denken", "imagem": "./images/icons/Denken_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Magos Imperiais", "Exame de Magos"], "habilidade": "Magia de Fogo / Combate Físico", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Richter", "imagem": "./images/icons/Richter_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Manipulação de Terra", "status": "Vivo", "primeira_aparicao": "Episódio 19" },
    { "nome": "Laufen", "imagem": "./images/icons/Laufen_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Magia de Velocidade (Jilwer)", "status": "Vivo", "primeira_aparicao": "Episódio 19" },
    { "nome": "Genau", "imagem": "./images/icons/Genau_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Assosiação Mágica Continental", "Exame de Magos"], "habilidade": "Magia de Penas Negras", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Edel", "imagem": "./images/icons/Edel_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Magia Mental", "status": "Vivo", "primeira_aparicao": "Episódio 19" },
    { "nome": "Blei", "imagem": "./images/icons/Blei_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Magia de Projéteis", "status": "Vivo", "primeira_aparicao": "Episódio 19" },
    { "nome": "Dunste", "imagem": "./images/icons/Dunste_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Magia de Barreira", "status": "Vivo", "primeira_aparicao": "Episódio 19" },
    { "nome": "Ton", "imagem": "./images/icons/Ton_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Magia de Ilusão", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Lange", "imagem": "./images/icons/Lange_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos"], "habilidade": "Magia de Radar", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Methode", "imagem": "./images/icons/Methode_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Exame de Magos", "Assosiação Mágica Continental"], "habilidade": "Magia Multiuso / Restrição", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Sense", "imagem": "./images/icons/Sense_anime_portrait.webp", "genero": "Feminino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Assosiação Mágica Continental", "Exame de Magos"], "habilidade": "Manipulação de Cabelo", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Lernen", "imagem": "./images/icons/Lernen_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Magos Imperiais", "Assosiação Mágica Continental"], "habilidade": "Manipulação de Golems", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Falsch", "imagem": "./images/icons/Falsch_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Mago", "afiliacao": ["Assosiação Mágica Continental"], "habilidade": "Magia de Projeção", "status": "Vivo", "primeira_aparicao": "Episódio 18" },
    { "nome": "Serie", "imagem": "./images/icons/Serie_anime_portrait.webp", "genero": "Feminino", "raca": "Elfo", "classe": "Mago", "afiliacao": ["Assosiação Mágica Continental"], "habilidade": "Conhecimento de Todas as Magias", "status": "Vivo", "primeira_aparicao": "Episódio 20" },
    { "nome": "Bose", "imagem": "./images/icons/Bose_anime_portrait.webp", "genero": "Masculino", "raca": "Demônio", "classe": "Mago", "afiliacao": ["Sete Sábios da Destruição", "Exército do Rei Demônio"], "habilidade": "Magia de Barreira Eterna", "status": "Morto", "primeira_aparicao": "Episódio 18" },

    /* Mangá */
    { "nome": "Macht", "imagem": "./images/icons/Macht_anime_portrait.webp", "genero": "Masculino", "raca": "Demônio", "classe": "Mago", "afiliacao": ["Sete Sábios da Destruição", "Exército do Rei Demônio"], "habilidade": "Diagolze", "status": "Morto", "primeira_aparicao": "Capítulo 77" },
    { "nome": "Grausam", "imagem": "./images/icons/Grausam_manga_portrait.webp", "genero": "Masculino", "raca": "Demônio", "classe": "Mago", "afiliacao": ["Sete Sábios da Destruição", "Exército do Rei Demônio"], "habilidade": "Ansehelschella", "status": "Morto", "primeira_aparicao": "Capítulo 89" },
    { "nome": "Hero of the South", "imagem": "./images/icons/Hero_of_the_South_anime_portrait.webp", "genero": "Masculino", "raca": "Humano", "classe": "Guerreiro", "afiliacao": ["N/A"], "habilidade": "Previsão do Futuro", "status": "Morto", "primeira_aparicao": "Episódio 30" },
    { "nome": "Solitär", "imagem": "./images/icons/Solitar_manga_portrait.webp", "genero": "Feminino", "raca": "Demônio", "classe": "Mago", "afiliacao": ["N/A"], "habilidade": "Manipulação de Mana", "status": "Morto", "primeira_aparicao": "Capítulo 88" }
];

const hoje = new Date().toDateString(); 
const semente = new Date().getFullYear() * 10000 + (new Date().getMonth() + 1) * 100 + new Date().getDate();
const personagemDoDia = listaPersonagens[semente % listaPersonagens.length];

// const personagemDoDia = listaPersonagens[Math.floor(Math.random() * listaPersonagens.length)];

let personagensChutados = [];
const dataSalva = localStorage.getItem('data_jogo');
const chutesSalvos = localStorage.getItem('chutes_frierendle');

if (dataSalva === hoje && chutesSalvos) {
    personagensChutados = JSON.parse(chutesSalvos);
    function renderizarChutesSalvos() {
        const tabelaCorpo = document.getElementById("tabela-corpo");

        tabelaCorpo.innerHTML = "";

        personagensChutados.forEach(personagemEncontrado => {
            const epChutado = extrairEpisodio(personagemEncontrado.primeira_aparicao);
            const epAlvo = extrairEpisodio(personagemDoDia.primeira_aparicao);

            let seta = "";
            if (epChutado < epAlvo) seta = " ⬆️";
            else if (epChutado > epAlvo) seta = " ⬇️";

            const novaLinha = tabelaCorpo.insertRow(0); 

            novaLinha.innerHTML = `
            <td style="padding-top:10px; padding-bottom:5px;"><img src="${personagemEncontrado.imagem}" class="icons">${personagemEncontrado.nome}</td>
            <td class="${comparar(personagemEncontrado.genero, personagemDoDia.genero)}">${personagemEncontrado.genero}</td>
            <td class="${comparar(personagemEncontrado.raca, personagemDoDia.raca)}">${personagemEncontrado.raca}</td>
            <td class="${comparar(personagemEncontrado.classe, personagemDoDia.classe)}">${personagemEncontrado.classe}</td>
            <td class="${compararAfiliacao(personagemEncontrado.afiliacao, personagemDoDia.afiliacao)}">${personagemEncontrado.afiliacao}</td>
            <td class="${comparar(personagemEncontrado.status, personagemDoDia.status)}">${personagemEncontrado.status}</td>
            <td class="${comparar(personagemEncontrado.primeira_aparicao, personagemDoDia.primeira_aparicao)}">${personagemEncontrado.primeira_aparicao}${seta}</td>
            <td class="${comparar(personagemEncontrado.habilidade, personagemDoDia.habilidade)}">${personagemEncontrado.habilidade}</td>
            <td>${gerarIconeResultado(personagemEncontrado, personagemDoDia)}</td>
        `;

            if (personagemEncontrado.nome.toLowerCase() === personagemDoDia.nome.toLowerCase()) {
                inputBusca.disabled = true; 
                inputBusca.placeholder = "Você já acertou! Volte amanhã.";
                let qntChuteStorage = localStorage.getItem('qnt_chutes')
                setTimeout(() => {
                    mensagemElemento.innerHTML = `<h2>Você acertou! <br>✨ O personagem era <span style="color: #7C7BEF;">${personagemDoDia.nome}</span>! ✨</h2>`;
                    mensagemElemento2.innerHTML = `<h2> Você acertou em <span style="color: #7C7BEF;">${qntChuteStorage} tentativas</span>!</h2>`;


                    victoryBox.classList.remove('oculto');

                    victoryBox.scrollIntoView({
                        behavior: "smooth",
                        block: 'start'
                    });
                }, 3.5);
            }
        });
    }
    renderizarChutesSalvos();
} else {
    localStorage.clear();
}

function victoryWindow() {
    
        mensagemElemento.innerHTML = `<h2>Você acertou! <br>✨ O personagem era <span style="color: #7C7BEF;">${personagemDoDia.nome}</span>! ✨</h2>`;
        mensagemElemento2.innerHTML = `<h2> Você acertou em <span style="color: #7C7BEF;">${chuteQtn} tentativas</span>!</h2>`;


        victoryBox.classList.remove('oculto');

        victoryBox.scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
}


console.log("O alvo de hoje é:", personagemDoDia.nome);

function Guess() {
    let nomeDigitado = charName.value

    chuteQtn++
    localStorage.setItem('qnt_chutes', chuteQtn)

    const personagemEncontrado = listaPersonagens.find(p => p.nome.toLowerCase() === nomeDigitado.toLowerCase())

    if (!personagemEncontrado) {
        alert("Personagem não encontrado!");
        return;
    }

    if (personagensChutados.includes(personagemEncontrado) == true) {
        alert("Você já tentou esse personagem...")
        return
    }
    else {
        personagensChutados.push(personagemEncontrado)
    }
    localStorage.setItem('chutes_frierendle', JSON.stringify(personagensChutados));
    localStorage.setItem('data_jogo', new Date().toDateString());



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
    <td class="${comparar(personagemEncontrado.genero, personagemDoDia.genero)}">${personagemEncontrado.genero}</td>
    <td class="${comparar(personagemEncontrado.raca, personagemDoDia.raca)}">${personagemEncontrado.raca}</td>
    <td class="${comparar(personagemEncontrado.classe, personagemDoDia.classe)}">${personagemEncontrado.classe}</td>
    <td class="${compararAfiliacao(personagemEncontrado.afiliacao, personagemDoDia.afiliacao)}">${personagemEncontrado.afiliacao}</td>
    <td class="${comparar(personagemEncontrado.status, personagemDoDia.status)}">${personagemEncontrado.status}</td>
    <td class="${comparar(personagemEncontrado.primeira_aparicao, personagemDoDia.primeira_aparicao)}">${personagemEncontrado.primeira_aparicao}${seta}</td>
    <td class="${comparar(personagemEncontrado.habilidade, personagemDoDia.habilidade)}">${personagemEncontrado.habilidade}</td>
    <td>${gerarIconeResultado(personagemEncontrado, personagemDoDia)}</td>
`;


        if (personagemEncontrado.nome.toLowerCase() === personagemDoDia.nome.toLowerCase()) {
            let yay = new Audio('./audio/kids-saying-yay-sound-effect_3.mp3')
            yay.volume = 0.2;
            yay.play()
            balao.innerText = "YAAAAAAAY 🥳"
            balao.classList.remove("oculto")
            setTimeout(() => {
                balao.classList.add("oculto")
            }, 5000);
            frierenPlush.classList.add('shake')
            inputBusca.disabled = true; 
            inputBusca.placeholder = "Você já acertou! Volte amanhã.";

            inputBusca.value = '';

            setTimeout(() => {
                mensagemElemento.innerHTML = `<h2>Você acertou! <br>✨ O personagem era <span style="color: #7C7BEF;">${personagemDoDia.nome}</span>! ✨</h2>`;
                mensagemElemento2.innerHTML = `<h2> Você acertou em <span style="color: #7C7BEF;">${chuteQtn} tentativas</span>!</h2>`;


                victoryBox.classList.remove('oculto');

                victoryBox.scrollIntoView({
                    behavior: "smooth",
                    block: 'start'
                });
            }, 3.2);
        } else {
            novaLinha.classList.add("shake-row");
            setTimeout(() => {
                novaLinha.classList.remove("shake-row");
            }, 400);
        }

    }
    else {
        alert("Esse personagem não está na nossa base de dados! ")
    }



}

function gerarIconeResultado(chutado, alvo) {
    if (chutado.nome.toLowerCase() === alvo.nome.toLowerCase()) {
        return '<i class="fa-solid fa-check" style="color: #63e6be;"></i>';
    } else {
        return '<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>';
    }
}

function comparar(valorChutado, valorAlvo) {
    if (valorChutado === valorAlvo) {
        return "correto";
    }

    return "errado";
}


function compararAfiliacao(chutado, alvo) {

    const listaChutado = Array.isArray(chutado) ? chutado : [chutado];
    const listaAlvo = Array.isArray(alvo) ? alvo : [alvo];

    if (listaChutado.sort().join(',') === listaAlvo.sort().join(',')) {
        return "correto";
    }


    const temInterseccao = listaChutado.some(item => listaAlvo.includes(item));

    if (temInterseccao) {
        return "parcial";
    }

    return "errado";
}


function carregarSugestoes() {
    const datalist = document.getElementById("personagens-sugestoes");

    datalist.innerHTML = "";

    listaPersonagens.forEach(personagem => {
        const opcao = document.createElement("option");
        opcao.value = personagem.nome;
        datalist.appendChild(opcao);
    });
}

function extrairEpisodio(texto) {
    return parseInt(texto.replace(/\D/g, ''));
}


const falaFrierenMouseEnter = new Audio('./audio/HUH - AUDIO FROM JAYUZUMI.COM.mp3')



function tocarFala() {

    falaFrierenMouseEnter.currentTime = 0
    falaFrierenMouseEnter.play()
}


let quoteList = [
    { audio: new Audio('./audio/sousou-no-frieren-kurai-yo-kowai-yo.mp3'), texto: "Kurai yo! Kowai yo!" },
    { audio: new Audio('./audio/DO YOU LIKE MAGIC - AUDIO FROM JAYUZUMI.COM.mp3'), texto: "Do you like magic?" },
    { audio: new Audio('./audio/I DOUBT THE GODESS WILL FORGIVE YOU - AUDIO FROM JAYUZUMI.COM.mp3'), texto: "I doubt the goddes will forgive you..." },
    { audio: new Audio('./audio/THE ERA METEOR SHOWER - AUDIO FROM JAYUZUMI.COM.mp3'), texto: "The era meteor shower should be circling around soon" },
    { audio: new Audio('./audio/WHATS WRONG - AUDIO FROM JAYUZUMI.COM.mp3'), texto: "Whats wrong?" },
    { audio: new Audio('./audio/a-kiss-from-frieren.mp3'), texto: ":3 Mwa ~?" },
    { audio: new Audio('./audio/I HARDLY KNEW ANYTHING ABOUT HIM - AUDIO FROM JAYUZUMI.COM.mp3'), texto: "I hardly knew anything about him..." },
    { audio: new Audio('./audio/I INTEND TO TRAVEL - AUDIO FROM JAYUZUMI.COM.mp3'), texto: "I intend to travel around the central lands collecting new spells..." },
    { audio: new Audio('./audio/NEXT TIME THEN - AUDIO FROM JAYUZUMI.COM.mp3'), texto: "Next time then." },
]

function randomQuoteAudio() {




    if (audioAtual) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    if (balaoTimer) {
        clearTimeout(balaoTimer)
    }


    const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)]
    console.log(randomQuote)


    audioAtual = randomQuote.audio


    audioAtual.currentTime = 0
    audioAtual.volume = 0.2
    audioAtual.play()

    balao.innerText = randomQuote.texto
    balao.classList.remove("oculto")

    balaoTimer = setTimeout(() => {
        balao.classList.add("oculto")
    }, 5000)

}

frierenPlush.addEventListener('click', () => {

    randomQuoteAudio()

})


// ?INPUT AUTOCOMPLETE       

const sugestoesBox = document.getElementById('sugestoes-box');

inputBusca.addEventListener('input', () => {
    const valor = inputBusca.value.toLowerCase();
    sugestoesBox.innerHTML = '';

    if (valor.length > 0) {

        const filtrados = listaPersonagens.filter(p =>
            p.nome.toLowerCase().includes(valor)
        );


        if (filtrados.length > 0) {
            sugestoesBox.classList.remove('oculto');

            filtrados.forEach(p => {
                const item = document.createElement('div');
                item.classList.add('sugestao-item');

                item.innerHTML = `
                    <img src="${p.imagem}" alt="${p.nome}">
                    <span>${p.nome}</span>
                `;

                
                item.onclick = () => {
                    inputBusca.value = p.nome;
                    sugestoesBox.innerHTML = '';
                    sugestoesBox.classList.add('oculto');
                    Guess()
                    inputBusca.value = '';
                };

                sugestoesBox.appendChild(item);
            });
        } else {

            sugestoesBox.classList.add('oculto');
        }
    } else {

        sugestoesBox.classList.add('oculto');
    }

    
});

inputBusca.addEventListener('keydown', (event) =>{
    if(event.key === "Enter"){
        const primeiraSugestao = sugestoesBox.querySelector('.sugestao-item')
       

        if(primeiraSugestao){
            primeiraSugestao.click()

        }
    }
})


document.addEventListener('click', (e) => {
    if (e.target !== inputBusca) sugestoesBox.innerHTML = '';
});

xButton.addEventListener('click', ()=>{
    victoryBox.classList.remove('float')
    xButton.remove()

})




function atualizarContagemRegressiva() {
    const agora = new Date();
    
    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);
    amanha.setHours(0, 0, 0, 0);

    const diferenca = amanha - agora; 

    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    const formato = (num) => String(num).padStart(2, '0');

    document.getElementById("timer").innerText = `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;


    if (diferenca <= 0) {
        location.reload();
    }
}

setInterval(atualizarContagemRegressiva, 1000);
atualizarContagemRegressiva(); 

