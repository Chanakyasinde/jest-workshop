const { calculateFinalAmount } = require("../src/pricing");

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("Check for no coupon case", () => {
  expect(calculateFinalAmount(500)).toBe(500);
});

test("Check for SAVE10 coupon", () => {
  expect(calculateFinalAmount(200, "SAVE10")).toBe(180);
});

test("Check for FLAT50 boundary case", () => {
  expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
});

test("Check for case-insensitive coupon", () => {
  expect(calculateFinalAmount(200, "save10")).toBe(180);
  expect(calculateFinalAmount(200, "SaVe10")).toBe(180);
});

