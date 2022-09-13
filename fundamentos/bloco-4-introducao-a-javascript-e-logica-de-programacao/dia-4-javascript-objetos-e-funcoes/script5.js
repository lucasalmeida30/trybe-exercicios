let info2 = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Mountain',
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
  };

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
  };

  console.log(`${info.personagem} e ${info2.personagem}`)
  console.log(`${info.origem} e ${info2.origem}`)
  console.log(`${info.nota} e ${info2.nota}`)
  
  let nota1 = info.recorrente
  let nota2 = info2.recorrente
  if(nota1 === nota2){
    console.log('Ambas recorrentes')
  }