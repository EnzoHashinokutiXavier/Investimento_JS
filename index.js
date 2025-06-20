

function outcome() {

    let valorInicial = Number(document.getElementById('valor').value)
    let porcentagem = Number(document.getElementById('porcentagem').value)
    let tempo = Number(document.getElementById('tempo').value)
    let valorFinal = valorInicial
    let tempoTotal
    if (document.getElementById('box1').checked){
        for(let i = 0; i < tempo; i++){
            valorFinal = ((valorFinal * porcentagem)/100) + valorFinal
        }
        document.getElementById('resultado').innerHTML = valorFinal.toFixed(2)
    }
    else{
        tempoTotal = tempo * 12
        for(let i = 0; i < tempoTotal; i++){
            valorFinal = ((valorFinal * porcentagem)/100) + valorFinal
        }
        document.getElementById('resultado').innerHTML = valorFinal.toFixed(2)
    }
}