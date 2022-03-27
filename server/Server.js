var ServerConfig = require('./ServerConfig');
var express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const ModuloPrincipal = require ('./ModuloPrincipal');
var app = express();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(express.json());
app.use(cors());

app.get('/cinepolis-web/peliculas',ModuloPrincipal.getMovies);
app.get('/cinepolis-web/login',ModuloPrincipal.login);
app.post('/cinepolis-web/registro',ModuloPrincipal.registro);

var server = app.listen(9000, function (req,res) {
    console.log('[MENSAJE]:[El servidor se esta ejecutando en el puerto 9000]');
});