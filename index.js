// index.js

const express = require('express');
const dotenv  = require('dotenv');
const connectDB = require('./config/config');
const tasksRoutes = require('./routes/tasks');

dotenv.config(); //Cargamos las variables de entorno
const app = express(); //Creamos la aplicacion express


//Conectamos a la base de datos
connectDB();


//Añadimos middleware para que express pueda parsear json
app.use(express.json());


//Añadimos las rutas de las tareas
app.use('/api/tasks', tasksRoutes); //Todas las rutas de tareas estarán bajo /api/tasks


//Definimos el puerto en el que va a escuchar la aplicacion
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});