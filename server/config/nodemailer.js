const nodemailer = require("nodemailer");
require("dotenv").config();
const { nodemailer_email, nodemailer_pass} = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: nodemailer_email,
    pass: nodemailer_pass,
  },
});

transporter.verify()
  .then(() => console.log("Transporte creado con exito..."))
  .catch((error) => console.error(error));

module.exports = transporter;