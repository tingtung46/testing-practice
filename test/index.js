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

export const caesarCipher = (string, shift) => {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char.match(/[a-z]/i)) {
      const code = string.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    result += char;
  }

  return result;
};

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
