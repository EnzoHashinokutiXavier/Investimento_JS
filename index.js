
// Função principal
function outcome() {

    // Recebe Valores digitados via html
    let valorInicial = Number(document.getElementById('valor').value)
    let porcentagem = Number(document.getElementById('porcentagem').value)
    let tempo = Number(document.getElementById('tempo').value)

    // Declara variáveis usadas nos cálculos 
    let valorFinal = valorInicial
    let tempoTotal
    let aumento

    // Calculo com tempo medido em meses
    if (document.getElementById('box1').checked){
        // Calculo do crescimento do valor investido
        for(let i = 0; i < tempo; i++){
            valorFinal = ((valorFinal * porcentagem)/100) + valorFinal
        }
        // Calculo da diferença entre valor investido e valor retornado
        aumento = valorFinal - valorInicial
        // Envio dos resultados para o html
        document.getElementById('resultado').innerHTML = 'R$' + valorFinal.toFixed(2)
        document.getElementById('aumento').innerHTML = 'R$' + aumento.toFixed(2)
    }
    
    // Calculo com tempo medido em anos
    else{
        // Conversão de anos para meses
        tempoTotal = tempo * 12
        // Calculo do crescimento do valor investido
        for(let i = 0; i < tempoTotal; i++){
            valorFinal = ((valorFinal * porcentagem)/100) + valorFinal
        }
        // Calculo da diferença entre valor investido e valor retornado
        aumento = valorFinal - valorInicial
        // Envio dos resultados para o html
        document.getElementById('resultado').innerHTML = 'Total : R$' + valorFinal.toFixed(2)
        document.getElementById('aumento').innerHTML = 'Aumento : R$' + aumento.toFixed(2)
    }
}