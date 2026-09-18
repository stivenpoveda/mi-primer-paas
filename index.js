const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Mi Primer PaaS</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
                h1 { color: #2c3e50; }
                .card { background: white; padding: 20px; border-radius: 8px; display: inline-block; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>¡Hola Mundo desde la Nube (PaaS)!</h1>
                <p>Esta aplicación está corriendo exitosamente en <strong>Render</strong>.</p>
                <p>Estudiante de Cloud Computing: ¡Despliegue exitoso!</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
