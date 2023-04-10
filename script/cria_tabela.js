function cria_tabela(){
    let i = 0;

    cabecalho()

    //Deixa a tabela vazia
    window.document.getElementById('ctabela').innerHTML = '' 

    linha = window.document.getElementById("ctabela")

    quant_proposicoes = window.document.getElementById("iproposicao")
    for (; i < (2 ** quant_proposicoes.value);i++){
        linha.innerHTML += '<tr id="ln' + i +'"></tr>'
        linha_atual = window.document.getElementById("ln" + i)
        for (let l = 1; l <= quant_proposicoes.value; l++) {

            if ((2 ** quant_proposicoes.value)/2 < (i + 1)) {
                linha_atual.innerHTML += '<td>F</td>'
            } else {
                linha_atual.innerHTML += '<td>V</td>'
            }
        }
    }
}

function cabecalho() {
    propos = window.document.getElementById("cpropos")

    propos.innerHTML += "<tr><th>p</th></tr>"
}