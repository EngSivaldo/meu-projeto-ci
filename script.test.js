const { calcularDivida } = require('./script');

test('deve calcular juros compostos corretamente (Ex: 1000 a 5% por 3 meses)', () => {
  // 1000 * (1.05)^3 = 1157.625... -> 1157.63
  expect(calcularDivida(1000, 5, 3)).toBe(1157.63);
});

test('deve retornar 0 se os parâmetros forem inválidos', () => {
  expect(calcularDivida('100', 5, 2)).toBe(0);
});
