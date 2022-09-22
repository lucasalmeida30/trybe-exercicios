const myFizzBuzz = require('./myFizzBuzz');

test('se o numero é divisil por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('se o numero é divisil por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
});

test('se o numero é divisil por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
});

test('se o numero não é divisil por 3 e 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
})