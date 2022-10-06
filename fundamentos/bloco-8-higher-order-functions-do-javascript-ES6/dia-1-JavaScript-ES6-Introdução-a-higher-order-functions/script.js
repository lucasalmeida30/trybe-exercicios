const newEmployees = (generateRegistration) => {
    const employees = {
      id1: generateRegistration('Pedro guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: generateRegistration('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: generateRegistration('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const generateRegistration = (fullName) => {
    let email = fullName.replace(' ', '_').toLowerCase()
    return {
        fullName,
        email: `${email}@betrybe.com`
    }
  }

  console.log(newEmployees(generateRegistration))
