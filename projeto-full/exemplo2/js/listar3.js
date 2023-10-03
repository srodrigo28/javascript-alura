async function getProdutos() {
    const url = 'http://localhost:8080/produto';

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.addEventListener("load", function(){
        let resposta = xhr.responseText;
        console.log(resposta)
        console.log(typeof(resposta))

        console.log("\n =============================================== \n")

        let produtos = JSON.parse(resposta)
        console.log(produtos);
        console.log(typeof(produtos))
    })
    xhr.send();
}
getProdutos();