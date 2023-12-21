const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "espinozaluiskeny@gmail.com",
    pass: "xwdk mxhz popz kzok",
  },
});

transporter.verify()
  .then(() => console.log("Transporte creado con exito..."))
  .catch((error) => console.error(error));

module.exports = transporter;