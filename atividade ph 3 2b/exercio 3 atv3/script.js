let ipinput = document.querySelector("#ipinput");
let ipinput2 = document.querySelector("#ipinput2");
let botao = document.querySelector("#botao");
let soma = document.querySelector("#soma");
let subtracao = document.querySelector("#subtracao");
let divisao = document.querySelector("#divisao");
let multiplicacao = document.querySelector("#multiplicacao")

function suzana() {

    let soma1 = parseFloat(ipinput.value);
    let soma2 = parseFloat(ipinput2.value);

    let numero1 = soma1 + soma2 ;
    let numero2 = soma1 - soma2 ;
    let numero3 = soma1 / soma2 ;
    let numero4 = soma1 * soma2 ;

    soma.textContent =  numero1;
    subtracao.textContent = numero2;
    divisao.textContent = numero3 ;
    multiplicacao.textContent = numero4 ;

}
botao.onclick = suzana;