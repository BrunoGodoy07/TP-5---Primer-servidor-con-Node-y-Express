# TP-5---Primer-servidor-con-Node-y-Express
## A resolver

1. Crear una función que devuelva la hora actual en formato `HH:MM:SS` y exportarla desde un archivo llamado `time.js`.

2. Crear un archivo `app.js` que use Express y tenga las siguientes rutas:

   - `/` → debe responder con un mensaje de bienvenida (texto plano).
   - `/hora` → debe responder con la hora actual en texto plano.
   - `/fecha-completa` → debe devolver la fecha y hora completa, por ejemplo:  
     `"sábado 5 de abril de 2025, 16:24:51"`

3. Usar `app.listen()` en un archivo llamado `index.js` para levantar el servidor en el puerto **3000**.

4. Probar las rutas desde el navegador o usando Postman.

---

## Extra (opcional)

- Devolver errores **404 personalizados** para rutas inexistentes.

---

## Entrega

- Proyecto en **GitHub** con un archivo `read.md` con **instrucciones de uso** del proyecto.
