const calcularDivida = require("./script");

test("Deve calcular o montante de R$ 1000 a 10% por 2 meses corretamente", () => {
  // Cálculo esperado: 1000 * (1.1)^2 = 1210
  expect(calcularDivida(1000, 10, 2)).toBe(1210);
});

test("Deve retornar 0 para valores de entrada inválidos", () => {
  expect(calcularDivida(-100, 5, 1)).toBe(0);
  expect(calcularDivida(100, -2, 1)).toBe(0);
});
