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

export const analyzeArray = (arr) => {
  const average = calcAverage(arr);
  const min = calcMin(arr);
  const max = calcMax(arr);
  const length = arr.length;

  return { average, min, max, length };
};

const calcAverage = (arr) => {
  const arrAverage = arr.reduce((prev, curr) => {
    return Math.floor((prev + curr) / 2);
  }, 0);

  return arrAverage;
};

const calcMin = (arr) => {
  arr.sort((a, b) => a - b);

  return arr[0];
};

const calcMax = (arr) => {
  arr.sort((a, b) => a - b);

  return arr[arr.length - 1];
};
