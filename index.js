const capitalize = (string) => string.charAt(0).toUpperCase();

const reverseString = (string) => {
  let temp = '';
  for (let i = 0; i < string.length; i++) {
    temp += string.charAt(string.length - 1 - i);
  }
  return temp;
};

const calculator = () => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => {
    if (a === 0 || b === 0) throw Error('Error');
    return a / b;
  };
  const multiply = (a, b) => a * b;
  return {
    add, subtract, divide, multiply,
  };
};

const caesarCipher = (str, shift) => str
  .split('')
  .map((char) => {
    if (/[a-zA-Z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase();
      const alphabetStart = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const shiftedCharCode = ((char.charCodeAt(0) - alphabetStart + shift) % 26 + 26) % 26 + alphabetStart;
      return String.fromCharCode(shiftedCharCode);
    } else {
      return char;
    }
  })
  .join('');

const analyzeArray = (array) => {
  const arr = array.slice().sort((a, b) => a - b);
  const length = arr.length;
  const min = arr[0];
  const max = arr[length - 1];
  const average = arr[Math.floor(length / 2)];
  return {
    average, min, max, length,
  };
};

export {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
};