function calcularDesconto(valor) {
  if (valor >= 100) {
    return valor * 0.9;
  }
  return valor;
}

// Lógica de Sênior: Verifica se estamos no ambiente Node.js para exportar
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = calcularDesconto;
}
