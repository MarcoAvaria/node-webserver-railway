import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//const express = require('express')
import hbs from 'hbs';
import express from 'express';

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', function (err) {});

// Servir contenido estático
app.use( express.static('public') );



// app.get('/', (req, res) => {
//     res.send('Home page')
// })
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Marco Avaria',
        titulo: 'Curso de Node'
    });
    //res.sendFile(__dirname + '/public/generic.html')
})

app.get('/generic', (req, res) => {
    res.render( 'generic', {
        nombre: 'Marco Avaria',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render( 'elements', {
        nombre: 'Marco Avaria',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/back/404.html');
})

//app.listen(8080)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })