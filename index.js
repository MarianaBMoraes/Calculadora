const prompt = require("prompt-sync")();

function sair() {
  const s = prompt("Digite 's' para sair ou 'c' para continuar: ");
  if (s.toLowerCase() == "s") {
    console.log("Encerrando a calculadora...");
    process.exit();
  }
}

function calculadora() {
  while (true) {
    let numero1 = parseFloat(prompt("Digite o primeiro número: "));
    let numero2 = parseFloat(prompt("Digite o segundo número: "));

    if (isNaN(numero1) || isNaN(numero2)) {
      console.log("Entrada inválida. Por favor, digite números válidos.");
      continue;
    }

    let operacao = prompt("Digite a operação desejada (+, -, *, /, %): ");

    let resultado;
    switch (operacao) {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      case "*":
        resultado = (numero1 * numero2);
        break;
      case "/":
        if (numero2 === 0) {
          console.log("Erro: Divisão por zero não é permitida.");
          continue;
        }
        resultado = (numero1 / numero2).toFixed(2);
        break;
      case "%":
        resultado = ((numero1 * numero2) / 100).toFixed(2);
        break;
      default:
        console.log(
          "Operação inválida. Por favor, escolha uma das operações válidas: +, -, *, /, %"
        );
        continue;
    }

    console.log(
      `O resultado da operação ${numero1} ${operacao} ${numero2} é: ${resultado}`
    );

    sair();
  }
}

calculadora();
