const express = require('express');
const morgan = require('morgan');

require('./utils/mongoConnection');

const moviesRouter = require('./routers/movies.router');

const app = express();
const port = 3003;

app.use(morgan('dev')); //Muestra en consola el método que está siendo usado
app.use(express.json({limit: '50mb'})); // Especificar que express puede usar JSON de hasta 50MB para evitar que crashee con archivos de mucho peso
app.use('/movies', moviesRouter); // Asignar la ruta base a el archivo de rutas

app.use(function(req,res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, X-HTTP-Method-Override, Access-Control-Allow-Origin');
    next();
});

app.get("/", (req, res) => {
    res.send("Bienvenido al Cine API");
})

app.listen(port, ()=> {
    console.log(`Servidor iniciado en http://localhost:${port}`);
})