function converter(){
    let graus = parseFloat(prompt('Insira a temperatura em °C'))

    if(graus){
        let resultadoKelvin = graus + 273
        let resultadoFarenheint = (graus * 1.8 )+ 32

        document.getElementById('Resultado').innerText = `${resultadoKelvin}°K \n ${resultadoFarenheint}°F`


    }else{
        alert('Insira um valor correto')
    }

}