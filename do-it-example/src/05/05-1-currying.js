{
  function multiply(a, b) {
    return a * b;
  }

  function multiplyTwo(a) {
    return multiply(a, 2);
  }

  // function multiplyX(x) {
  //   return function (a) {
  //     return multiply(a, x);
  //   };
  // }

  const multiplyX = (x) => (a) => multiply(a, x);

  const multiplyThree = multiplyX(3);
  const multiplyFour = multiplyX(4);

  const result1 = multiplyThree(3); // 3 * 3 = 9
  const result2 = multiplyFour(3); // 4 * 3 = 12
}

// => ((x * a) * b) + c))
// a = 2, b = 3, c = 4
{
  const equation = (a, b, c) => (x) => x * a * b + c;
  const formular = equation(2, 3, 4);
  const x = 10;
  const result = formular(x);
}
//  -----------------------

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(x, a);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = (x) => addFour(multiplyThree(multiplyTwo(x)));

// => ((x + 4) * 3) * 2
const formulaB = (x) => multiplyTwo(multiplyThree(addFour(x)));
