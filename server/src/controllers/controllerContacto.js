const transporter = require('../../config/nodemailer');

const controllerContacto = async(name, email, subject, message) => {
    await transporter.sendMail({
        from: email,
        to: "kespinozaluis@gmail.com",
        subject: subject,
        html: `
        <div style="background-color: #2b292b; padding-top: 2rem; text-align: center;">
            <div style="background-color: #fff; width: 70%; max-width: 350px; margin: 0 auto; padding: 3rem 2rem 0; border-radius: 10px 10px 0 0;">
                <div style="color: #172432; padding-bottom: 1rem; font-size:1rem">
                    Hola, soy 
                    <p style="font-size: 1.2rem; margin: 0.5rem 0 1rem"> ${name}</p>
                </div>
                <hr style="margin: 0; border-top: 0; border-bottom: 1px solid #ebebeb;">
            </div>
        </div>
        <div style="background-color: #FFECD6; padding-bottom: 4rem;">
            <div style="background-color: #fff; width: 70%; max-width: 350px; margin: 0 auto; padding: 1rem 2rem 3rem; border-radius: 0 0 10px 10px; text-align: center; color: #000;">
                <p>${message}</p>
                <p>Correo: ${email}</p>
            </div>
        </div>
        `,
    })
}

module.exports = controllerContacto;