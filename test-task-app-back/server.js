const express  = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

const films = require('./app/films');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const port = 9000;

mongoose.connect(config.filmsDb, config.mongoOptions).then(() => {

    app.use('/films', films);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    })

});