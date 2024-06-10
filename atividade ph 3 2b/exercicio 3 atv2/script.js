let ipinput = document.querySelector("#ipinput");
let botao = document.querySelector("#botao");
 let iph1 = document.querySelector("#iph1");
 let pd = document.querySelector("#pd");

function pessoas(){
    let total = parseFloat(ipinput.value);

    let ovos = total * 2 ; 
     let Gramas = total  * 50 ;


    iph1.textContent = ovos;
    pd.textContent = Gramas ;
}
botao.onclick = pessoas;