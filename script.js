function calcularDivida(valorInicial, taxaMensal, meses) {
  // Validação de segurança: deve ser número e não pode ser negativo
  if (
    typeof valorInicial !== 'number' ||
    typeof taxaMensal !== 'number' ||
    typeof meses !== 'number' ||
    valorInicial < 0 ||
    taxaMensal < 0 ||
    meses < 0
  ) {
    return 0;
  }

  const i = taxaMensal / 100;
  const valorFinal = valorInicial * Math.pow(1 + i, meses);

  return parseFloat(valorFinal.toFixed(2));
}

// Exportação híbrida (Navegador + Node/Jest)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = calcularDivida;
}
