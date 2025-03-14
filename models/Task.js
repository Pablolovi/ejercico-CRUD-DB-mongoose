//models/Task.js
const mongoose = require('mongoose');

//Definimos el esquema de la tarea
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  //El titulo es obligatorio 
    },
    completed: {
        type: Boolean,
        default: false,  //Por defecto la tarea no esta completada
    },
}, {
    timestamps: true, //Añadimos timestamps para que se añadan las fechas de creacion(createdAt) y modificacion(updatedAt)
}); 


//Creamos el modelo de la tarea con el esquema definido
const Task = mongoose.model('Task', TaskSchema);


//Exportamos el modelo
module.exports = Task;