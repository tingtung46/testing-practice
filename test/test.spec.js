import { capitalize, reverseString, Calculator } from "./index.js";

describe("string", () => {
  test("capitalize a string", () => {
    expect(capitalize("outdoor")).toMatch(/Outdoor/);
  });

  test("reverse a string", () => {
    expect(reverseString("hiking")).toMatch("gnikih");
  });
});

describe("calculator", () => {
  test("add two numbers", () => {
    expect(Calculator.add(2, 2)).toEqual(4);
  });

  test("subtract two numbers", () => {
    expect(Calculator.subtract(2, 4)).toEqual(-2);
  });

  test("divide two numbers", () => {
    expect(Calculator.divide(4, 2)).toEqual(2);
  });

  test("multiply two numbers", () => {
    expect(Calculator.multiply(2, 2)).toEqual(4);
  });
});
