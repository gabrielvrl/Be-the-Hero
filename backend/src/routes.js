const express = require('express');

const routes = express.Router();

routes.post('/users', (require, response) => {
    return response.json({ 
        evento: 'Semana Omnistack 11.0',
        aluno: 'Gabriel Varela'
     })
})

module.exports = routes;
