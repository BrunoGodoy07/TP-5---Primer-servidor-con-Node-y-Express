import { horaActual } from "./time.js";
import  express  from "express";
const app = express();

app.get('/', (req,res) =>{
    res.send("Bienvenido a mi servidor");
})
//http://localhost:3000

app.get('/hora', (req,res) =>{
    let hora = horaActual();
    res.send(`La hora actual es: ${hora}`);
})
//http://localhost:3000

app.get('/fecha-completa', (req,res) =>{
    let fecha = new Date();
    res.send(`La fecha completa es: ${fecha.toLocaleString()}`);
})
//http://localhost:3000

export default app