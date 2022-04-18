let body = document.querySelector('body');



let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM'

body.appendChild(titulo);

let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);


let section1 =  document.createElement('section');
section1.className = 'center-content';

main.appendChild(section1);

let paragraph = document.createElement('p');

paragraph.innerText = 'flamengo vai ser campeao da libertadores 2022'

section1.appendChild(paragraph);

let section2 = document.createElement('section');

section2.className = 'left-content';

main.appendChild(section2);

let section3 = document.createElement('section');

section3.className = 'right-content';

main.appendChild(section3);

let picture = document.createElement('img');

picture.src = 'https://picsum.photos/200';
picture.className = 'small-image';

section3.appendChild(picture);

let list = document.createElement('ul');
let arrayNumbers = [
    'um',
    'dois',
    'tres',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'deis'



]
for (let index in arrayNumbers) {
    let elementLi = document.createElement('li');
    elementLi.innerText = arrayNumbers[index];
    section3.appendChild(elementLi);
}

let h31 = document.createElement('h3');

main.appendChild(h31);

let h32 = document.createElement('h3');

main.appendChild(h32);

let h33 = document.createElement('h3');

main.appendChild(h33);



h31.className = 'description';
h32.className = 'description';
h33.className = 'description';

main.removeChild(section2);

section3.style.marginRight = 'auto';

section1.style.backgroundColor = 'green';

main.removeChild(main.lastChild);
main.removeChild(main.lastChild);
