export const capitalize = (string) => {
  const newString = string.charAt(0).toUpperCase() + string.slice(1);

  return newString;
};

export const reverseString = (string) => {
  const newString = string.split("").reverse().join("");

  return newString;
};
