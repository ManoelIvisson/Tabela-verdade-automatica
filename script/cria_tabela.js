function cria_tabela(){
    let i = 0;

    linha = window.document.getElementById("ctabela")
    quant_proposicoes = window.document.getElementById("iproposicao")
    for (; i < (2 ** quant_proposicoes.value);i++){
        linha.innerHTML += '<tr id="ln' + i +'"></tr>'
        linha_atual = window.document.getElementById("ln" + i)
        for (let i = 0; i < quant_proposicoes.value; i++) {
            linha_atual.innerHTML += '<td>Uepaaaaa</td>'
        }
    }
}

function colunas(num) {
    for (let i = 0; i < num; i++) {
        alert(i)
        return '<td>Uepaaaaa</td>'
    }
}