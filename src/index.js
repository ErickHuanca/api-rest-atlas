const express = require ('express');
const mongoose = require ('mongoose')
require('dotenv').config();
const notaRoutes = require ('./routes/notas');

//configuracion
const app = express();
const port = process.env.PORT || 9000;
app.set('json spaces', 2);


//meddleware
app.use(express.json());
app.use('/api', notaRoutes);


// routes
app.get('/', (req, res) => {
    res.send('welmoce');
})


//coneccion a mongo atlas
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('estoy conectado a la db atlas'))
.catch((error) => console.log(error));

app.listen(9000, () => console.log('server listennig on port', port))