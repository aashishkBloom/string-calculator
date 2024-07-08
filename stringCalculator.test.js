const stringCalculator = require("./stringCalculator");

test("should return 0 for an empty string", () => {
  expect(stringCalculator("")).toBe(0);
});

test("should return the number for a single number string", () => {
  expect(stringCalculator("1")).toBe(1);
  expect(stringCalculator("2")).toBe(2);
});

test("should return the sum of two numbers separated by a comma", () => {
  expect(stringCalculator("1,2")).toBe(3);
  expect(stringCalculator("3,4")).toBe(7);
});

test("should return the sum of multiple numbers separated by commas", () => {
  expect(stringCalculator("1,2,3")).toBe(6);
  expect(stringCalculator("4,5,6,7")).toBe(22);
});

test("should return the sum of numbers with a custom delimiter", () => {
  expect(stringCalculator("//;\n1;2")).toBe(3);
  expect(stringCalculator("//|\n4|5|6")).toBe(15);
});

test("should throw an exception for negative numbers", () => {
  expect(() => stringCalculator("1,-2")).toThrow(
    "negative numbers not allowed: -2"
  );
  expect(() => stringCalculator("-1,2,-3")).toThrow(
    "negative numbers not allowed: -1,-3"
  );
});

test("should throw an exception for multiple negative numbers", () => {
  expect(() => stringCalculator("1,-2,-3")).toThrow(
    "negative numbers not allowed: -2,-3"
  );
  expect(() => stringCalculator("//;\n-1;-2;-3")).toThrow(
    "negative numbers not allowed: -1,-2,-3"
  );
});
