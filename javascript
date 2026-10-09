// ... outras partes do código e variáveis como historiaFinal, atual ...

function respostaSelecionada(opcaoSelecionada) {
    // Sorteia uma das várias afirmações que aquela opção possui
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    
    // Concatena a afirmação sorteada na história final com um espaço
    historiaFinal += afirmacoes + " ";
    
    // Avança para o índice da próxima pergunta
    atual++;
    
    // Chama a função para desenhar a próxima pergunta na tela
    mostraPergunta();
}

// ... outra parte do código ...

function aleatorio(lista) {
    // Sorteia o índice de 0 até o tamanho máximo da lista informada
    const posicao = Math.floor(Math.random() * lista.length);
    
    // Retorna textualmente o item correspondente àquela posição
    return lista[posicao];
}
