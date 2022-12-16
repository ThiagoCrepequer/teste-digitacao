document.body.addEventListener('keydown', function(event) {
    var texto = document.getElementById('palavra')

    var conteudo = texto.innerText;
    var array = conteudo.split('')

    if(comecou == 1) {
        if(event.key === array[0]) {
            array.shift()
            texto.innerText = array.join("")
        } else {
            if(event.key === 'Dead') {
                return
            }
            erro()
        }
    }
    
})