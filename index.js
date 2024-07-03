const prompt = require("prompt-sync")();

function calculadora() {
  let numero1 = parseFloat(prompt("Digite o primeiro número: "));
  let numero2 = parseFloat(prompt("Digite o segundo número: "));

  if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Entrada inválida. Por favor, digite números válidos");
   }

  let operaçao = prompt("Digite a operação desejada (+,-,*,/,%): ");

  if (operaçao !== "+" && operaçao !== "-" && operaçao !== "*" && operaçao !== "/" && operaçao !== "%") {
    console.log("Operação inválida. Por favor escolha uma das operações válidas: +, -, *, /, %");
  }

  let resultado;
  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      console.log(resultado);
      break;
    case "-":
      resultado = numero1 - numero2;
      console.log(resultado);
      break;
    case "*":
      resultado = numero1 * numero2;
      console.log(resultado);
      break;
    case "/":
      resultado = numero1 / numero2;
      console.log(resultado);
      break;
    case "%":
      resultado = (numero1 % numero2) / 100;
      console.log(resultado);
      break;
    default:
        console.log("Operação inválida.")
      break;
  }

}
