const horaActual = () =>{
    const ahora = new Date();
    let horaActual=ahora.getHours().toString();
    let minutoActual=ahora.getMinutes().toString();
    let segundoActual=ahora.getSeconds().toString();
    let hora = (`${horaActual}:${minutoActual}:${segundoActual}`)
    return hora
}

export {horaActual}