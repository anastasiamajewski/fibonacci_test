const fibonacci = require("../fibonacci_functions");
test("it should return fibonacci number", () => {
  let actualResult = fibonacci(10);
  let expectedResult = 55;
  expect(actualResult).toBe(expectedResult);
});


test("it should return flase", () => {
    let actualResult = fibonacci(typeof n === 'string');
    let expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });


test("it should return", () => {
    let actualResult = fibonacci(-10);
    let expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });