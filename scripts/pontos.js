pontos_totais = 15

function certo() {
    pontos_totais++
    atualizar_pontos()
}

function erro() {
    pontos_totais--
    atualizar_pontos()
    if(pontos_totais <= 0) {
        timer()
    }
}

function atualizar_pontos() {
    if(pontos_totais <= 0) {
        timer()
    }
    var pontos = document.getElementById('pontos_totais')
    pontos.innerText = pontos_totais
}

function timer() {
    if(pontos_totais <= 0) {
        acabou_tempo(timer)
    }
    var timer = setInterval(function() {
        pontos_totais = pontos_totais - 1;
        if(pontos_totais <= 0) {
            acabou_tempo(timer)
        }
        atualizar_pontos()
    }, 1000)
}

function acabou_tempo(timer) {
    comecou = 2
    clearInterval(timer)
    return pontos_totais = 0
}

var i = 0
function acertos_totais() {
    i++
    var p_total = document.getElementById('p_total')
    p_total.innerText = i
}