let addTabela = document.querySelector("#adicionar");

addTabela.addEventListener("click", (evento) => {
    evento.preventDefault();

    let form = document.querySelector("#form-name");

    let codigo = form.codigo.value
    let nome   = form.nome.value
    let qtd    = form.qtd.value
    let valor  = form.valor.value
    let rs  = form.result.value

    let produtoTr = document.createElement("tr");

    let idTd = document.createElement("td");
    let nomeTd = document.createElement("td");
    let qtdTd = document.createElement("td");
    let valorTd = document.createElement("td");
    let rsTd = document.createElement("td");

    idTd.textContent = codigo;
    nomeTd.textContent = nome;
    qtdTd.textContent = qtd;
    valorTd.textContent = valor;
    rsTd.textContent = rs;

    produtoTr.appendChild(idTd);
    produtoTr.appendChild(nomeTd);
    produtoTr.appendChild(qtdTd);
    produtoTr.appendChild(valorTd);
    produtoTr.appendChild(rsTd);

    let tabela = document.querySelector("#tabela-produtos");

    tabela.appendChild(produtoTr);
    
    console.log(produtoTr);

}) 