const express = require('express');
const notaSchema = require('../models/nota');

const router = express.Router();

//crear nota
router.post('/notas', (req, res) => {
    const nota = notaSchema(req.body);
    nota
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// mostrar notas
router.get('/notas', (req, res) => {
    notaSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;