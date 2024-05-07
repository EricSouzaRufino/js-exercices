
function edsonFrango(){
    let ano = parseInt(prompt("Insira um ano"));

if(ano % 4 == 0){
    document.getElementById('Analise').innerHTML = 'Analisando o ano de '+ano+'...';

    document.getElementById('Resultado').innerHTML = 'É bissexto ✅'

    mudarCorTrue()

}else{
    document.getElementById('Analise').innerHTML = 'Analisando o ano de '+ano+'...';

    document.getElementById('Resultado').innerHTML = 'Não é bissexto ❌'
    mudarCorFalse()
}

}

function mudarCorTrue(){

    let resultTrue = document.getElementById('Resultado');
    resultTrue.style.background = 'lightgreen'
    resultTrue.style.display = 'inline-block'

}

function mudarCorFalse(){

    let resultFalse = document.getElementById('Resultado');
    resultFalse.style.background = '#f8c3c0'
    resultFalse.style.display = 'inline-block'
}