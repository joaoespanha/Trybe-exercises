let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        oddNumbers = oddNumbers;

    } else {
        oddNumbers++;

    }

}

console.log(oddNumbers);