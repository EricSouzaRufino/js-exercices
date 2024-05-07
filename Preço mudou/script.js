function verificar() {
    let precoAnterior = parseFloat(prompt("Qual era o preço anterior do produto ?"));
    let precoAtual = parseFloat(prompt("Qual é o preço atual do produto ?"))
    let comparacao = document.getElementById('prizeComp');
    let calculoPreco = document.getElementById('attPreco');
    let porcentagem = document.getElementById('variacaoPorcentagem');
    let igualdade = precoAtual == precoAnterior

    if (precoAtual && precoAnterior && !igualdade) {

        paragraph.innerText = ""
        let analise = document.getElementById('analiseh1').innerText = "Analisando os valores informados"
        let precos = document.getElementById('precos').innerText = `O produto custava RS${precoAnterior} e agora custa R$${precoAtual}.`

        if (precoAtual > precoAnterior) {

            comparacao.innerText = "Hoje o produto está mais caro."
            calculoPreco.innerText = `O preço subiu RS${precoAtual - precoAnterior} em relação ao preço anterior.`
            porcentagem.innerText = `Uma variação de ${(precoAtual - precoAnterior)/precoAnterior*100}% pra cima.`
        } else {
            comparacao.innerText = "Hoje o produto está mais barato."
            calculoPreco.innerText = `O preço abaixou R$${precoAnterior - precoAtual} em relação ao preço anterior.`
            porcentagem.innerText = `Uma variação de ${(precoAnterior - precoAtual)/precoAnterior*100}% pra baixo.`
        
        }

    } else {
        paragraph.innerText = ""
        precos.innerText = "O preço não mudou."
    }
}
