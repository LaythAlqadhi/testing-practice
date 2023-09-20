import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} from './index.js';

test('capitalize function should return the first character capitalized', () => {
  expect(capitalize('hello world!')).toBe('H');
});

test('reverseString function should return the reversed string', () => {
  expect(reverseString('reversed')).toBe('desrever');
});

describe('Calculator', () => {
  test('add function should perform addition', () => {
    const calc = calculator();
    expect(calc.add(5, 3)).toBe(8);
  });

  test('subtract function should perform subtraction', () => {
    const calc = calculator();
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('divide function should perform division', () => {
    const calc = calculator();
    expect(calc.divide(12, 4)).toBe(3);
  });

  test('multiply function should perform multiplication', () => {
    const calc = calculator();
    expect(calc.multiply(2, 6)).toBe(12);
  }); 
});

describe('Caesar Cipher', () => {
  test('should shift letters while preserving case', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('should wrap from "z" to "a"', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('should keep the same case', () => {
    expect(caesarCipher('Sensitive', 1)).toBe('Tfotjujwf');
  });

  test('should handle punctuation', () => {
    expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
  });
});

test('analyzeArray function should return an object with average, min, max, and length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});