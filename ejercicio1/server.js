// INGENIERA EN FORMACIÓN: Paula Unda - C.I: 32.139.353
// UNIDAD CURRICULAR: Programación III


// Ejercicio 1 - Este programa permite al usuario escribir su animal favorito
// en un formulario y luego mostrarlo en otra página usando Node.js

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Este middleware me permite leer los datos que vienen del formulario
app.use(express.urlencoded({ extended: true }));


// PRIMERA VISTA: FORMULARIO

// Aquí muestro la primera página donde el usuario escribe su animal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});

// EVITAR ACCESO DIRECTO A /enviar

// Si alguien entra directo a esta ruta sin usar el formulario,
// le muestro una página informando que no es la forma correcta
app.get('/enviar', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'acceso-incorrecto.html'));
});

// SEGUNDA VISTA: RESULTADO

// Aquí es donde recibo el dato del formulario (animal favorito)
// y lo muestro en otra página
app.post('/enviar', (req, res) => {

    // Guardo lo que el usuario escribió
    const animalFavorito = req.body.animal;

    // Verifico que el usuario sí haya escrito algo
    if (!animalFavorito || animalFavorito.trim() === '') {
        return res.sendFile(path.join(__dirname, 'views', 'error.html'));
    }

    // Leo el archivo HTML donde voy a mostrar el resultado
    const resultadoPath = path.join(__dirname, 'views', 'resultado.html');

    fs.readFile(resultadoPath, 'utf8', (err, html) => {

        if (err) {
            return res.status(500).send('Error en el servidor');
        }

        // Aquí reemplazo el texto {{animal}} por el dato real
        // que escribió el usuario
        const htmlFinal = html.replace('{{animal}}', animalFavorito);

        // Envío la segunda página ya con el animal incluido
        res.send(htmlFinal);
    });
});

// INICIALIZACIÓN DEL SERVIDOR

app.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('SERVIDOR HTTP INICIALIZADO - EVALUACIÓN');
    console.log('='.repeat(60));
    console.log(`> Puerto de escucha: ${PORT}`);
    console.log(`> Endpoint principal: http://localhost:${PORT}`);
    console.log(`> Archivos HTML en: /views/`);
    console.log('> Estado: Activo | Modo: Desarrollo');
    console.log('='.repeat(60));
});