const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho){
    return new Promise((resolve, reject) => {
        try{
            let arquivos = fs.readFileSync(caminho)
            return arquivos.map(arquivos => path.join(caminho, arquivo))
            resolve(arquivos)
        }catch (e){
            reject(e)
        }
    })
}


module.exports = {
    lerDiretorio
}