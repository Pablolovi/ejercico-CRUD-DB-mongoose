// config/config.js 

const mongoose = require('mongoose');

//Funcion para conectar a la base de datos
const connectDB = async () => {
    try {
        //Usamos la URI de nuestro archivo .env
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${ error.message }`);
        process.exit(1); //Salimos de la aplicacion si no podemos conectar a la base de datos
    }
}; 

module.exports = connectDB;

