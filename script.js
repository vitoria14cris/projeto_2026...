// Lista de perguntas (lista[posicao])
const lista = [
    {
        pergunta: "Qual é a capital da França?",
        respostas: ["Paris", "Londres", "Berlim", "Madri"],
        correta: 0
    },
    {
        pergunta: "Quanto é 2 + 2?",
        respostas: ["3", "4", "5", "6"],
        correta: 1
    }
];

// Função para selecionar uma posição aleatória usando Math.floor()
function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Função para mostrar a pergunta na tela
function mostraPergunta() {
    const perguntaAtual = aleatorio(lista);
    console.log(perguntaAtual.pergunta);
    // Aqui iria o código para renderizar no HTML
}

// Função para lidar com a seleção da resposta pelo usuário
function respostaSelecionada(indiceSelecionado, perguntaAtual) {
    if (indiceSelecionado === perguntaAtual.correta) {
        console.log("Resposta correta!");
    } else {
        console.log("Resposta errada!");
    }
    mostraResultado();
}

// Função para mostrar o resultado final
function mostraResultado() {
    console.log("Quiz finalizado! Mostrando resultados...");
    // Aqui iria o código para exibir a pontuação na tela
}
