const mongoose = require ('mongoose');

const notaSchema = mongoose.Schema({
    titular: {
        type: String,
        required: true
    },
    resumen: {
        type: String,
        required: true
    },
    fotos: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fuente: {
        type: String,
        required: true
    },
    palabrasclave: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('nota', notaSchema);