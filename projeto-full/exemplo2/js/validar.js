const validar = () => {
    let nome = document.querySelector("#nome").value
    let valor = document.querySelector("#valor").value
    let qtd = document.querySelector("#qtd").value

    if( nome === "" ){
        alert(" Nome Precisa ser preenchido ")
    } else if( valor === "" ){
        alert(" Valor precisa ser no minimo 1,00 ")
    } else if( qtd === "" ){
        alert(" Quantidate precisa ser no minimo 1 ")
    } else{
       alert("Cadastrado com sucesso ")
    }
}