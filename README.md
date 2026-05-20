# Frierendle - Personagem do Dia

Um jogo de adivinhação diária baseado no universo de **Sousou no Frieren**, inspirado em sucessos como Wordle e Loldle. Desafie seu conhecimento sobre os personagens do anime e descubra quem é o alvo de hoje!

---

## Como Jogar

1. **Chute um personagem:** Digite o nome de um personagem no campo de busca.
2. **Autocomplete com imagens:** O sistema ajudará você a encontrar o nome correto com fotos para facilitar a identificação.
3. **Analise os atributos:** A cada tentativa, o jogo revela informações como:
   - **Gênero, Raça e Classe**
   - **Afiliação** (Indica se há correspondência parcial ou total)
   - **Status** (Vivo/Morto)
   - **Primeira Aparição** (Com setas indicativas se o alvo apareceu antes ou depois do personagem chutado)
   - **Habilidade Principal**
4. **Vitória:** O jogo termina quando você acerta o personagem do dia!

---

## Funcionalidades Principais

* **Desafio Diário:** O personagem muda automaticamente todos os dias à meia-noite (UTC).
* **Persistência de Dados:** Seus chutes e progresso são salvos no `localStorage`, permitindo fechar a aba e continuar depois sem perder nada.
* **Interatividade:** Clique na pelúcia da Frieren para ouvir falas aleatórias do anime com balões de fala dinâmicos.
* **Revelação Progressiva:** As informações dos personagens são reveladas coluna por coluna, criando suspense.
* **Contagem Regressiva:** Um timer indica quanto tempo falta para o próximo desafio.
* **Sons Imersivos:** Efeitos sonoros de interação e falas originais.
* **Modo Infinito:** Você pode mesmo após acertar, tentar novamente acertar outro personagem aleatório.
* **Modo Mangá:** Para os fãs que leram o mangá, podem escolher essa opção para um modo que contém todos os personagens mais relevantes que apareceram no mangá até então.

---

## Tecnologias Utilizadas

Este projeto foi desenvolvido focado em **JavaScript Vanilla** (Puro), explorando conceitos avançados de manipulação de DOM e lógica de programação:

* **HTML5 & CSS3:** Layout responsivo, animações personalizadas (`keyframes`) e efeitos de sombreamento cinematográfico.
* **JavaScript (ES6+):**
    * Manipulação dinâmica de tabelas.
    * Lógica de "Semente" (Seed) para troca diária de personagens.
    * Uso de `Web Audio API` para efeitos sonoros.
    * `localStorage` para persistência de estado.
    * Filtros de busca e Autocomplete customizado.

---

## Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/RainanKaneka/frierendle.git](https://github.com/RainanKaneka/frierendle.git)
