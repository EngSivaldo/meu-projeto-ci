function calcularDivida(valorInicial, taxaMensal, meses) {
  // Validação de segurança para garantir que são números
  if (
    typeof valorInicial !== "number" ||
    typeof taxaMensal !== "number" ||
    typeof meses !== "number" ||
    valorInicial < 0 ||
    taxaMensal < 0 ||
    meses < 0 // Boa prática: evitar valores negativos
  ) {
    return 0;
  }

  const i = taxaMensal / 100;
  const valorFinal = valorInicial * Math.pow(1 + i, meses);

  return parseFloat(valorFinal.toFixed(2));
}

// Exportação híbrida (Navegador + Node/Jest)
// Sênior: Exportamos a função DIRETAMENTE para o require do teste funcionar
if (typeof module !== "undefined" && module.exports) {
  module.exports = calcularDivida;
}
