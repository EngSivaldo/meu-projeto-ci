function calcularDivida(valorInicial, taxaMensal, meses) {
  // Validação de segurança para garantir que são números
  if (
    typeof valorInicial !== 'number' ||
    typeof taxaMensal !== 'number' ||
    typeof meses !== 'number'
  ) {
    return 0;
  }

  const i = taxaMensal / 100; // Converte porcentagem para decimal
  const valorFinal = valorInicial * Math.pow(1 + i, meses); // Fórmula de juros compostos

  return parseFloat(valorFinal.toFixed(2)); // Retorna com 2 casas decimais
}

// Exportação híbrida (Navegador + Node/Jest)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = calcularDivida;
}
