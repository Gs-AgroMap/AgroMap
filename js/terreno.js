const inputNome = document.getElementById("nome");
const inputLargura = document.getElementById("largura");
const inputComprimento = document.getElementById("comprimento");
const botao = document.getElementById("botao");

const printArea = document.getElementById("area");
const printPerimetro = document.getElementById("perimetro");

botao.addEventListener("click", function () {
    const nome = inputNome.value;
    const largura = Number(inputLargura.value);
    const comprimento = Number(inputComprimento.value);

    const area = largura * comprimento;
    const perimetro = 2 * (largura + comprimento);

    printArea.textContent = area;
    printPerimetro.textContent = perimetro;

    alert("Fazenda salva: " + nome);
});