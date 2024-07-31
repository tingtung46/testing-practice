import { capitalize, reverseString, Calculator } from "./index.js";

test("capitalize a string", () => {
  expect(capitalize("outdoor")).toMatch(/Outdoor/);
});

test("reverse a string", () => {
  expect(reverseString("hiking")).toMatch("gnikih");
});

describe("calculator", () => {
  test("add two numbers", () => {
    expect(Calculator.add(2, 2)).toEqual(4);
  });

  test("subtract two numbers", () => {
    expect(Calculator.subtract(2, 4)).toEqual(-2);
  });
});
