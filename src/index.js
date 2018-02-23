const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const appRoutes = require('./routes/appRoutes');

mongoose.connect('mongodb://localhost/crud-mean-db');

//Settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extend: true}));

//Routes
app.use('/', appRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(app.get('port'), () => {
    console.log("Servidor rodando na " + app.get('port'))
});