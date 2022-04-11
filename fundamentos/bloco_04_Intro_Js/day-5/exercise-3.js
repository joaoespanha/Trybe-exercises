let array = ['java', 'javascript', 'python', 'html', 'css'];



//guardar o elemento do array que e maior
let biggerWord = array[0] ;
let smallWord = array[0] ;

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < smallWord.length) {
        smallWord = array[i];


    }
    if (array[i].length > biggerWord.length) {
        biggerWord = array[i];

    }



}

console.log(smallWord);
console.log(biggerWord);

