const readline = require('readline-sync');

const calculateImc = () => {
    const weight = readline.questionFloat('Submit your Weight:')
    const height = readline.questionFloat('Submit your height:')

    const bmi =  weight / (height ** 2);
    console.log(`Your mbi is: ${bmi.toFixed(2)}`);

    if (bmi < 18.5) {
        console.log('Status: Underweight (thin)');
        return;
      }
  
      if (bmi >= 18.5 && bmi < 25) {
        console.log('Status: Normal weight');
        return;
      }
  
      if (bmi >= 25 && bmi < 30) {
        console.log('Status: Overweight (overweight)');
        return;
      }
  
      if (bmi >= 30 && bmi < 35) {
        console.log('Status: Grade I obesity');
        return;
      }
  
      if (bmi >= 35 && bmi < 40) {
        console.log('Status: Grade II obesity');
        return;
      }
  
      console.log('Status: Obesity grades III and IV');
}; 




module.exports = {
    calculateImc
}