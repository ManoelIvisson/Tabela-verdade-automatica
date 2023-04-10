function cria_tabela(){
    let i = 0;

    //Deixa a tabela vazia
    window.document.getElementById('ctabela').innerHTML = '' 

    linha = window.document.getElementById("ctabela")

    quant_proposicoes = window.document.getElementById("iproposicao")
    for (; i < (2 ** quant_proposicoes.value);i++){
        linha.innerHTML += '<tr id="ln' + i +'"></tr>'
        linha_atual = window.document.getElementById("ln" + i)
        for (let i = 0; i < quant_proposicoes.value; i++) {
            linha_atual.innerHTML += '<td>V</td>'
        }
    }
}

function colunas(num) {
    for (let i = 0; i < num; i++) {
        alert(i)
        return '<td>Uepaaaaa</td>'
    }
}