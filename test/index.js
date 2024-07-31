export const capitalize = (string) => {
  const newString = string.charAt(0).toUpperCase() + string.slice(1);

  return newString;
};

export const reverseString = (string) => {
  const newString = string.split("").reverse().join("");

  return newString;
};

export const Calculator = (function () {
  const add = (a, b) => {
    return a + b;
  };

  const subtract = (a, b) => {
    return a - b;
  };

  const divide = (a, b) => {
    return a / b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  return { add, subtract, divide, multiply };
})();
