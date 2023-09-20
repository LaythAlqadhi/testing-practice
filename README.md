# Testing Practice

This repository features a set of JavaScript functions that have been tested using Jest. These functions cover various operations and utilities, and they are meant for practicing unit testing with Jest.

## Functions

### 1. `capitalize`

The `capitalize` function takes a string as input and returns the string with its first character capitalized.

### 2. `reverseString`

The `reverseString` function takes a string and returns it reversed.

### 3. `calculator`

The `calculator` object contains functions for basic arithmetic operations:

- `add(a, b)`: Performs addition and returns the result.
- `subtract(a, b)`: Performs subtraction and returns the result.
- `divide(a, b)`: Performs division and returns the result. It handles division by zero by throwing an error.
- `multiply(a, b)`: Performs multiplication and returns the result.

### 4. `caesarCipher`

The `caesarCipher` function takes a string and a shift factor as inputs and returns the string with each character "shifted" according to the Caesar cipher algorithm. It preserves case, wraps from 'z' to 'a', and handles punctuation.

### 5. `analyzeArray`

The `analyzeArray` function takes an array of numbers and returns an object with the following properties:

- `average`: The average value of the numbers in the array.
- `min`: The minimum value in the array.
- `max`: The maximum value in the array.
- `length`: The length of the array.

## Testing

Jest test cases have been provided for each of these functions to ensure they behave as expected. You can find the test cases in the `index.test.js` file.