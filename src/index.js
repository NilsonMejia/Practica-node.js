import express from 'express';

import usersRouter from './routes/usersRoutes.js';


import { errorHandler } from './Middlewares/errorHandler.js';

import dotenv from 'dotenv'
dotenv.config();

const app= express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hola, mundo UNIACES! El servidor esta funcionando correctamente ');

});


//Rutas

app.use('/users', usersRouter);


//Se use al final de cada ruta
app.use(errorHandler);


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Servidor corrriendo en htttp://localhost:${process.env.PORT || 3000}`);
});
