const { calculateImc } = require('./bmi');
const { simpsons } = require('./simpsons');


const getData =  async () => {
     await simpsons();    
}

getData();