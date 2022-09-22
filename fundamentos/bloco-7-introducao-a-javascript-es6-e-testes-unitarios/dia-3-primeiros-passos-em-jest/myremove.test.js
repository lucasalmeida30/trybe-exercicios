const myRemove = require('./myremove');

describe('exercicio 2 - teste 1', () => {
    test('remove um item', () =>{
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
});

describe('exercicio 2 - teste 2', () => {
    test('remove um item', () =>{
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 3, 4]);
    });
});

describe('exercicio 2 - teste 3', () => {
    test('remove um item', () =>{
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

