const rigthAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const callback = (rigthAnswers, studentAnswers) => {
  if(rigthAnswers === studentAnswers) return 1;
  if(rigthAnswers === 'N.A') return 0;
  return -0.5;
}

const resultadoExame = (respostasCorreta, respostasEstudante, callback) => {
    let counter = 0;
    for(let index = 0; index <= respostasCorreta.length; index += 1) {
      let returnCallback = callback(respostasCorreta[index], respostasEstudante[index])
      counter += returnCallback;
    }
    return `Resultado final: ${counter} pontos`
  }

  console.log(resultadoExame(rigthAnswers, studentAnswers, callback))