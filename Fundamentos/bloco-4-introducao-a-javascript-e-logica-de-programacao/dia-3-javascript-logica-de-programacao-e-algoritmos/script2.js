let nome = 'manchester'
let inverted = ''

for(let index = (nome.length - 1); index >= 0; index -=1){
    inverted +=nome[index]
}

console.log(inverted)