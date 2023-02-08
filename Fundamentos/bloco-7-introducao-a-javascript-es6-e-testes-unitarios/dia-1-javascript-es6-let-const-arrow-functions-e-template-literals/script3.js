const factorial = (numero) => {
    let result = 1
    for(let index = 2; index <= numero; index +=1){
       result = result * index
    }
    return result
}

const resultFactorial = factorial(4)

console.log(`Esse é o fatorial ${resultFactorial}`)