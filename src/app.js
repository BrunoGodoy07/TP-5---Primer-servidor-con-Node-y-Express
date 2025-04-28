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

app.use((req, res, next) => {
    res.status(404).send(`
        <html>
          <head>
            <title>Error 404 - No encontrado</title>
          </head>
          <body style="text-align: center; font-family: Arial;">
            <h1>¡Oops! Página no encontrada</h1>
            <img src="https://http.cat/404" alt="Error 404" style="width: 50%;">
          </body>
        </html>
    `);
});
export default app