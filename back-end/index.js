const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();

app.use(express.json());

//CONEXION A BASE DE DATOS

const mongoString=process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database=mongoose.connection;

database.on('error',(error)=>{
    console.log(error);
})

database.once('connected',()=>{
    console.log('Base de datos conectada');
})

//Importacion rutas
const routes=require('./routes/routes');
app.use('/api',routes);

app.listen(3000,()=> {
    console.log('Server funcionando en puerto 3000')
})


