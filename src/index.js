const express = require('express');
const cors = require('cors');
const app = express();
const indexRoutes = require('./routes/routes');

//Settings
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extend: false}));

//Routes
app.use(indexRoutes);

app.listen(app.get('port'), () => {
    console.log("Servidor rodando na " + app.get('port'))
});