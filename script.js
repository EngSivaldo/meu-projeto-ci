function calcularDesconto(valor, porcentagem) {
  if (typeof valor !== "number" || typeof porcentagem !== "number") {
    return 0;
  }
  return valor - valor * (porcentagem / 100);
}

// Exportando para o ambiente de testes (Node.js)
if (typeof module !== "undefined") {
  module.exports = { calcularDesconto };
}
