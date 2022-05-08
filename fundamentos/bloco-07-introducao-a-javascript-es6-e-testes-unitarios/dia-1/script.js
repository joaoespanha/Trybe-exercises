//Exercicio 1
const testingScope = (escopo) => {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    if (escopo === true) {
      ifScope =  `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

//testingScope(false);

// Exercicio 2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.



const sortFuntion = (array) => console.log(`Os números se ${array.sort((a,b) => a - b)} encontram ordenados de forma crescente!`);



sortFuntion(oddsAndEvens);

// Exercicio 3

const fatorialFunc = (Number) => {
    if(Number <= 1) {
        return 1;

    } else {
        let total = Number;
        for(let fatorial = Number; fatorial >= 2; fatorial -= 1) {
            if(total != fatorial) {
            total *= fatorial;
            }
        }

        return `O fatorial de !${Number} é igual a: ${total}`;
    }

}
console.log(fatorialFunc(1));

//exercicio 4
const funcBiggerWord = (prhase) => {
    let biggerWord = '';
    const myArry = prhase.split(" ");
    for(let index in myArry) {  
        if( myArry[index].length > biggerWord.length) {
            biggerWord = myArry[index];
        }
    }
    return `A maior palavra da frase inserida biggerWord é "${biggerWord}"`;
} 

console.log(funcBiggerWord('Oh meu mengao, eu gosto de voce'));

//Exercicio 5 em script-parte2.js


// Exercicio 6

const replaceStringContent = (string, replace) => {
  let repl = replace
  let newStr = string.replace('x', replace);
  return newStr
} 

//console.log( replaceStringContent('tryber x aqui', 'joao'));


//Exercicio 7

const mySkills = ['comunicatio', 'javaScript', 'css', 'html', 'git'].sort();



const concat = (tryber) => {
  let skillList = '';
  for(let skills of mySkills) {
    skillList += `
    - ${skills}`
}
return `${tryber}
Minhas cinco principais habilidades são:
${skillList}`;
}

console.log(concat(replaceStringContent('Tryber x aqui!', 'joao'))); 