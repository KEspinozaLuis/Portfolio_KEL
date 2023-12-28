
const controllerContacto = require('../controllers/controllerContacto');

const handlerContacto = (req, res) => {
    const {name, email, subject, message} = req.body;
    try {
        controllerContacto(name, email, subject, message);
        return res.status(200).json({message: "Email enviado" });
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = handlerContacto;