var comecou = 0
var texto = document.getElementById('palavra')

document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter' && comecou == 0) {
        comecou = 1
        texto.innerText = lista[0]
        lista.shift()

        p_comecar = document.getElementById('p_comecar')
        p_comecar.parentNode.removeChild(p_comecar)

        atualizar_pontos()
        timer()
    }
})