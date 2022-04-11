let numbers = [5 ,9, 3, 19, 70, 8, 100, 2, 35, 27];
let minimumNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (minimumNumber > numbers[i]) {
        minimumNumber = numbers[i];
    
    } else {
        minimumNumber = minimumNumber;
    
    }
    console.log(minimumNumber);
}
