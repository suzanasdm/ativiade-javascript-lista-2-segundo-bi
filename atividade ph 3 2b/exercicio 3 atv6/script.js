let Nota1 = document.querySelector ("#Nota1");
let Calcula2 = document.querySelector ("#Calcula2");

function Calcular () {
let suzana = Number(Nota1.value);

if (suzana <= 6 && suzana >= 4){
    alert ('Precisa fazer prova substitutiva.');

} else if ( suzana >6 ){
    alert ('APROVADO');
} else {
    alert ('REPROVADO') 
}

}
Calcula2.onclick =  Calcular;