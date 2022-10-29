const express = require('express');
const fs = require('fs').promises;

const app = express();
const dataBase = 'src/movies.json';

app.use(express.json());

// route to get movies arry
app.get('/movies', async (req, res) => {
    const data = await fs.readFile(dataBase, 'utf-8');

    console.log(JSON.parse(data));
    res.status(200).json(data);
});

// route to get movie by id
app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;

    const data = await fs.readFile(dataBase, 'utf-8');
    const moviesArry = JSON.parse(data);

    const selectedMovie = moviesArry.filter((movie) => movie.id === Number(id));

    console.log(selectedMovie);

    res.status(200).json(selectedMovie);
});

// route to add a new movie

app.post('/movies', async (req, res) => {
    const newMovie = { ...req.body };

    const oldData = await fs.readFile(dataBase, 'utf-8');
    const moviesList = JSON.parse(oldData);

    // adding to the dataBase json
    moviesList.push(newMovie);
    const listToString = JSON.stringify(moviesList);

    await fs.writeFile(dataBase, listToString);
    
    // response
    console.log(moviesList);
    res.status(200).json(moviesList);
});

// route update movie

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const newInfo = { ...req.body };
    
    // geting movies info
    const data = await fs.readFile(dataBase, 'utf-8');
    const moviesArry = JSON.parse(data);

    const updatedMovie = {
        id: Number(id),
         ...newInfo,
    };
    // console.log('updated', updatedMovie);

    moviesArry.forEach((movie, index) => {
        if (movie.id === Number(id)) {
        moviesArry[index] = updatedMovie;
        }
    });
    
    const arryToString = JSON.stringify(moviesArry); 

    await fs.writeFile(dataBase, arryToString);
    
    res.status(200).end();
});

module.exports = app;