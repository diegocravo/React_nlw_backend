import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handlers';

import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
// rota = conjunto
// recurso = usuario

//metodos http = get, post, put, delete
//parametros

// query params 3333/users?search=diego
// route params 
// body 

app.listen(3333);