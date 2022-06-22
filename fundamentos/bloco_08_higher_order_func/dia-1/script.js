const newEmployees = () => {
    const employees = {
      id1: registerEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: registerEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: registerEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };



const registerEmployee = (nameParameter) => {
    const employee = {
        name: nameParameter,
        email: generateEmail(nameParameter)

    }
    return employee;
}

const generateEmail = (nameParameter) => `${nameParameter.replace(' ', '_').toLowerCase()}@trybe.com`;


console.log(newEmployees());

