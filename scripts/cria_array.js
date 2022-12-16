var lista = [
    'pão',
    'teclado',
    'garrafa',
    'aplicativo'
]

async function request() {
    const response = await fetch('https://api.dicionario-aberto.net/random');
    const data = await response.json();
    return data
}

async function run() {
    var result = await request()
    lista.unshift(result.word)
}

run()