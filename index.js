const prompt = require("prompt-sync")();

function calculadora() {
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let numero2 = parseFloat(prompt("Digite o segundo número:"));

  if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Entrada inválida. por favor, digite números válidos");
  }
}
