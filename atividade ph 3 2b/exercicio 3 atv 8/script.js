let valor1 = document.querySelector("#valor1");
let envio = document.querySelector("#envio");


function definir() {
   
    var num = valor1.value;
    var valorNumerico = Number(num);

   
    if (isNaN(valorNumerico)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    
    if (valorNumerico % 2 === 0) {
        alert('Número par!');
    } else {
        alert('Número ímpar!');
    }
}


envio.onclick = definir;