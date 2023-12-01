const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://alejandra:desarrolloweb@cluster0.lmwijdb.mongodb.net/cinema-db?retryWrites=true&w=majority'
)
.then(() => console.log('Conexion exitosa a mongodb'))
.catch(err => console.error('Error al conectar a mongoDB'.err));

module.exports=mongoose;