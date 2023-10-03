async function postProdutos() {

    let nome  =  document.querySelector("#nome").value
    let qtd   = document.querySelector("#qtd").value
    let valor = document.querySelector("#valor").value
    const { data } = axios.post('http://localhost:8080/produto', {
        nome: nome,
        qtd: qtd,
        valor: valor
    }, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}