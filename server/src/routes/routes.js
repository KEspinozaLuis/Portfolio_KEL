const {Router} = require('express');
const routes = Router();
const handlerContacto = require('../handlers/handlerContacto.js');

routes.post ('/sendEmail', handlerContacto);

module.exports = routes;