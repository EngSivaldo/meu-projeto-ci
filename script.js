function calcularDesconto(valor, percentual) {
  // Valida se os parâmetros são números
  if (typeof valor !== 'number' || typeof percentual !== 'number') {
    return 0;
  }

  const desconto = valor * (percentual / 100);
  return valor - desconto;
}

// Exportação híbrida (Navegador + Node)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { calcularDesconto }; // Exportando como objeto para bater com seu require
}
