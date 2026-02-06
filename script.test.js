const { calcularDesconto } = require("./script");

test("deve aplicar 10% de desconto corretamente", () => {
  expect(calcularDesconto(100, 10)).toBe(90);
});

test("deve retornar 0 se os parâmetros não forem números", () => {
  expect(calcularDesconto("100", 10)).toBe(0);
});
