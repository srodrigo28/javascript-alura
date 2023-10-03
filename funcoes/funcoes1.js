const fs = require('fs')

function lerDiretorio(caminho){
    let arquivos = fs.readdirSync(caminho)
    console.log(arquivos)
}

function teste1(){
    console.log('teste 1...')
}

function teste2(){
    console.log('teste 1...')
}

module.exports = {
    teste1, teste2, lerDiretorio
}