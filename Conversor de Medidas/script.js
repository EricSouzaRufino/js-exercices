function converter(){
    let distancia = parseFloat(prompt('Digite uma distancia em metros (m)'))
    
    if(distancia > 0){
        let metrosh4 = document.getElementById('Distancia').innerHTML = 'A distancia de '+distancia+' metros, corresponde a ...';
        let resultado = document.getElementById('Resultado').innerText = `${distancia/1000} quilometros(km)\n ${distancia/100} hectometros (hm) \n ${distancia/10} decametros (dam) \n ${distancia*10} decimetros (dm) \n ${distancia*100} centimetros (cm) \n ${distancia*1000} milimetros (mm)`
    }

}