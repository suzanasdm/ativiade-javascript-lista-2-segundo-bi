let a = document.querySelector("#a");
let b  = document.querySelector("#b");
let c  = document.querySelector("#c");
let d  = document.querySelector("#d");
let r = document.querySelector("#r");
let botao = document.querySelector("#botao");
let h1 = document.querySelector("#h1");
let h2 = document.querySelector("#h2");

function suzana() {
    let valor1 = a.value ;
    let valor2 = b.value ;
    let valor3 = c.value;
    let valor4 = d.value;
    let valor5 = parseInt(r.value) || 0;
     
    const precodapizza = 12.00;
    const precodorefrigerante = 7.00;



    let numero1 = 4  * precodapizza ;
    let numero2 = precodorefrigerante * valor5;
    let numero3 = numero1 + numero2 ;





    h2.textContent = `Valor total: R$ ${numero3.toFixed(2)}`;
    h1.textContent = `Sabores escolhidos: ${valor1}, ${valor2}, ${valor3}, ${valor4}`;


}
 
 botao.onclick = suzana;