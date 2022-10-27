const fetch = require('node-fetch');


const simpsons = async () => {
    const url = 'https://lms-assets.betrybe.com/lms/simpsons.json';
    const response = await fetch(url);
    if(!response) {
        console.log('invalid url');
    }
    const data = await response.json();
    console.log(data);
}

module.exports = { 
    simpsons 
};