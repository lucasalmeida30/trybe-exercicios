const sum = require('./sum');

describe('teste 1', () => {
  it('se a soma de 4 e 5 é igual a 9', () =>{
        expect(sum(4, 5)).toBe(9);
    });
});

describe('teste 2', () => {
  it('se a soma de 0 e 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('teste 3', () => {
    it('se os dois parametros são numeros', () => {
      expect(() => sum(4, '5')).toThrow(Error);
    });
  });

