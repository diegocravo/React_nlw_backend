import express from 'express';
import './database/connection';
import routes from './routes';



const app = express();

app.use(express.json())
app.use(routes)
// rota = conjunto
// recurso = usuario

//metodos http = get, post, put, delete
//parametros

// query params 3333/users?search=diego
// route params 
// body 

app.listen(3333);