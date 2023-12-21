const {Router} = require('express');
const routes = Router();

routes.use ('/sendEmail', (req, res) => {
    res.status(200).send('Enviado')
})

module.exports = routes;