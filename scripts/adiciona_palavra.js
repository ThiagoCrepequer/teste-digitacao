document.body.addEventListener('keydown', function(event) {
    var texto = document.getElementById('palavra')
    var conteudo = texto.innerText;
    
    if(conteudo == '' && comecou == 1) {
        certo()
        acertos_totais()
        run()
        texto.innerText = lista[0]
        lista.shift()
    }
})
