const moeda = (valor = 0) => {
    return valor.toLocaleString(
        'pt-br',
        { style: 'currency', currency: 'BRL'}
    );
}

const calcular  = async () => {
    validar();

    let valor = document.querySelector("#valor").value
    let qtd = document.querySelector("#qtd").value

    let calc  = await moeda(valor * qtd);

    document.querySelector("#result").value = calc;
}

addEventListener('submit', (e) => {
   e.preventDefault();
   calcular();
})