function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i < f) { // Contagem Crescente
            for (var contagem = i; contagem <= f; contagem += p) {
                resultado.innerHTML += ` ${contagem} \u{1F449}`
            } 
        } 
        
        else { // Contagem Regressiva
            for (var contagem = i; contagem >= f; contagem -= p) {
                resultado.innerHTML += ` ${contagem} \u{1F449}`
            }
        }

        resultado.innerHTML += '<p>Fim da contagem!<p>'
    }
}