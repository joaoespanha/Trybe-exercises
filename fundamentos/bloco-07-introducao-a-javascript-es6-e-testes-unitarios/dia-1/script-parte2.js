//Exercicio 5
//Criando o botao
const btnContainer = document.querySelector('.btn-container')
const btn = document.createElement('button');
const counterContainer = document.querySelector('.counter-container')

btn.innerText = 'Click to count';



let clickCounts = 0;


btn.addEventListener('click', () => {
    clickCounts += 1;
    counterContainer.innerText = `Voce clickou ${clickCounts} vezes`
})



btnContainer.appendChild(btn);
