// Routes/tasks.js

const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); //Importamos el modelo Task


// POST - Añadir una tarea
router.post('/create', async (req, res) => {
    try {
      const { title } = req.body;
      const newTask = new Task({ title });
      await newTask.save();
      res.status(201).json({ message: 'Tarea creada', task: newTask });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la tarea', error });
    }
  });


// GET /: Endpoint para traer todas las tareas
router.get('/', async (req, res) => {
    try {
      const tasks = await Task.find(); //Traemos todas las tareas
      res.status(200).json(tasks);
    } catch (error) {
       res.status(500).json({ message: 'Error al traer las tareas', error });
    }
  });


// GET /:id - Endpoint para traer una tarea por id
router.get('/id/:_id', async (req, res) => {
    try {
      const task = await Task.findById(req.params._id); //Buscamos la tarea por id
      if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
      res.status(200).json(task);       
    } catch (error) {
      res.status(500).json({ message: 'Error al traer la tarea', error });
    }   
    }); 


// PUT /markAsCompleted/:id - Endpoint para actualizar una tarea por id
router.put('/markAsCompleted/:_id', async (req, res) => {
    try {
      const task = await
      Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea marcada como completada', task });
    } catch (error) {
        res.status(500).json({ message: 'Error al marcar la tarea', error });
    }
}); 

//PUT /id/:id - Endpoint para actualizar solo el título de una tarea por id
router.put('/id/:_id', async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true });
      if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
        res.status(200).json({ message: 'Título de la tarea actualizada', task });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el título de la tarea', error });
    }
});

// DELETE /id/:id - Endpoint para eliminar una tarea por id
router.delete('/id/:_id', async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params._id);
      if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
      res.status(200).json({ message: 'Tarea eliminada', task });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la tarea', error });
    }
  });

module.exports = router; //Exportamos el router

