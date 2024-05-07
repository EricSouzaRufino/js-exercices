function converter(){
    let cotacao = parseFloat(prompt('Insira a cotacao atual do dolar'))
    let carteira = parseFloat(prompt('Insira quantos R$ voce tem na carteira'))

    if(carteira >= 0){
        let resultado = carteira/cotacao
        document.getElementById('Resultado').innerHTML = 'Convertendo, voce tem '+resultado+' dolares'
    }else{
        alert('Insira um valor correto')
    }

}