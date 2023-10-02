/** Carregar variaveis Globais */
let text__h1    = document.querySelector('h1').textContent;
let text__p     = document.querySelector('p').textContent;
let input__Valor =  document.querySelector('#valor');
let input__qtd =  document.querySelector('#valor');
let input__rs   = document.querySelector('#resultado');

/** Formatar moeda */
function moeda(valor = 0){
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

/** Validar os campos */
function validar(){

}

addEventListener('submit', (e) => {
    e.preventDefault();

    validar();

    valor = Number( input__Valor.value );
    qtd = Number( input__qtd.value ) ;

    calc = valor * qtd;
    input__rs.value = calc;

    let valor__semana = calc * 6;
    let valor__quinzena = calc * 12;
    let valor__mes = calc * 24;

    let s = document.querySelector('#semana').textContent = moeda(valor__semana);

    let q = document.querySelector('#quinzena').textContent = moeda(valor__quinzena);

    let m = document.querySelector('#mes').textContent = moeda(valor__mes);

    console.log(
        "Semana: " + moeda(valor__semana) + "\n" +
        "quinzena: " + moeda(valor__quinzena) + "\n" +
        "mês: " + moeda(valor__mes)
    )

})