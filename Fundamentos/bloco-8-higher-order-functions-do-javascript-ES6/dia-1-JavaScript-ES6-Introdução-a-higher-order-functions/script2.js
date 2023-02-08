const sorteio = () => Math.ceil(Math.random() * 5);

const verificarSorteio = (numero, callback) => {
    const numeroSorteado = callback()
  if(numero === numeroSorteado){
    return `numero sorteado:${numeroSorteado}
Parabéns você ganhou!! `
  }
  return `Numero sorteado:${numeroSorteado}
Tente novamente!!`
}

console.log(verificarSorteio(5, sorteio));