const ulrUF = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const cidades = document.getElementById("cidade")

const uf = document.getElementById('uf')

uf.addEventListener('change', async function(){
    const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' +uf.value+ '/municipios';

    const request = await fetch(urlCidades)

    const response = await request.json()
    console.log(response[0].nome)
    let options = ''
    response.forEach(function(cidades){
        options += '<option>'+cidades.nome+'</option>'
    })
    cidades.innerHTML = options

})

addEventListener('load', async () => {

    const request = await fetch(ulrUF);
    const response = await request.json();

    // console.log(res[26])

    const options = document.createElement("optgroup");
    options.setAttribute('label', 'UFs')
    response.forEach(function(uf){
        options.innerHTML += '<option>'+uf.sigla+'</option>'
        // console.log(uf.sigla)
    })
    uf.append(options)
})