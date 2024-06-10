let vendas = document.querySelector("#Vendas");
let meta = document.querySelector("#Meta");
let minima = document.querySelector("#Minima");
let resultado = document.querySelector("#Resultado");
let h1Meta = document.querySelector("#h1Meta");
let h2Minima = document.querySelector("#h2Minima");

function suzana() {
    let vendasValue = Number(vendas.value);
    let metaValue = Number(meta.value);
    let minimaValue = Number(minima.value);

    if (vendasValue >= metaValue && vendasValue >= minimaValue) {
        alert("Bateu a meta");
    } else if (vendasValue >= metaValue) {
        alert("Bateu a meta, mas não a mínima");
    } else if (vendasValue >= minimaValue) {
        alert("Bateu a mínima, mas não a meta");
    } else {
        alert("Não bateu a meta nem a mínima");
    }

    h1Meta.textContent = `Proporção de Meta: ${(vendasValue / metaValue).toFixed(2)}`;
    h2Minima.textContent = `Proporção de Mínima: ${(vendasValue / minimaValue).toFixed(2)}`;
}

resultado.onclick = suzana;
