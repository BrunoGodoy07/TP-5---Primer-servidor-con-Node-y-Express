import { horaActual } from "./time";

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

app.get('/hora', (req,res) =>{
    let hora = horaActual();
    res.send(`La hora actual es: ${hora}`);
})
//http://localhost:3000

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})