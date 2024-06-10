
let ipdolar = document.querySelector("#ipdolar");

let retorno1 = document.querySelector("#retorno1");
let retorno2 = document.querySelector("#retorno2");
let retorno3 = document.querySelector("#retorno3");
let retorno4 = document.querySelector("#retorno4");
let ipbotao = document.querySelector("#ipbotao");

function suzana() {
    let valorDolar = parseFloat(ipdolar.value);
   
    let numero1 = valorDolar  * 1.01 ;
    let numero2 = valorDolar * 1.02 ;
    let numero3 = valorDolar* 1.05;
    let numero4 = valorDolar * 1.10;


     
      
     retorno1.textContent = numero1.toFixed(2);
     retorno2.textContent = numero2.toFixed(2);
     retorno3.textContent = numero3.toFixed(2);
     retorno4.textContent = numero4.toFixed(2);




}
ipbotao.onclick = suzana ;