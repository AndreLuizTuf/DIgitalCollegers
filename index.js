let x = 10;
let y = 5;

// Operadores de atribuição
x += y;

// Operadores lógicos
let isEqual = x == 15 && y == 5;

// Operadores aritméticos
let sum = x + y;

// Operadores de comparação
let resultText = isEqual
  ? "Os valores estão corretos!"
  : "Os valores estão incorretos!";

document.getElementById("resultado").textContent =
  resultText + " A soma é: " + sum;
