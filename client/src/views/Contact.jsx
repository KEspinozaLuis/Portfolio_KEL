import { useState } from "react";
import { 
    BsFillGeoAltFill, 
    BsFillEnvelopeFill, 
    BsFillTelephoneFill,
    BsArrowRight 
} from "react-icons/bs";

import Button from "../components/Button";
import validate from '../utils/validate';
import axios from 'axios';
import { modalSuccess, modalError } from "../utils/modal";

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]: value})
        validate({...form, [property] : value}, property, errors, setErrors)
    }

    //Deshabilitar botón
    const btnDisabled = () => {
        let disabledAux = true;
        for(let error in errors){
            if(errors[error] === ""){
                disabledAux = false;
            }else{
                disabledAux = true;
                break;
            }
        }
        return disabledAux;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/sendEmail", form);
            modalSuccess();
        } catch (error) {
            modalError();
        }
    }

    return (
        <section className="wrapper section contact" id="contact">
            <h1 className="title">Contacto</h1>
            <div className="contactInfo">
                <div className="contentInfo">
                    <span className="icon"><BsFillGeoAltFill/></span>
                    <div className="information">
                        <h3>Dirección</h3>
                        <p>Lima, Perú</p>
                    </div>
                </div>
                <div className="contentInfo">
                    <span className="icon"><BsFillEnvelopeFill/></span>
                    <div className="information">
                        <h3>Correo</h3>
                        <p>kespinozaluis@gmail.com</p>
                    </div>
                </div>
                <div className="contentInfo">
                    <span className="icon"><BsFillTelephoneFill/></span>
                    <div className="information">
                        <h3>Celular</h3>
                        <p>+51 922732267</p>
                    </div>
                </div>
            </div>
            <form action="" className="contactForm" onSubmit={handleSubmit}>
                    <div className="contentInput">
                        <div className="inputLabel">
                            <input id="name" type="text" name="name" value={form.name} onChange={handleChange} autoComplete="off"/>
                            <label htmlFor="name" className={`${form.name && 'effectLabel'}`}>Tu nombre</label>
                        </div>
                        {errors.name && <span className="messageError">{errors.name}</span>}
                    </div>
                    <div className="contentInput">
                        <div className="inputLabel">
                            <input id="email" type="text" name="email" value={form.email} onChange={handleChange} autoComplete="off"/>
                            <label htmlFor="email" className={`${form.email && 'effectLabel'}`}>Tu correo</label>
                        </div>
                        {errors.email && <span className="messageError">{errors.email}</span>}
                    </div>
                    <div className="contentInput">
                        <div className="inputLabel">
                            <input id="subject" type="text" name="subject" value={form.subject} onChange={handleChange} autoComplete="off"/>
                            <label htmlFor="subject" className={`${form.subject && 'effectLabel'}`}>Asunto</label>
                        </div>
                        {errors.subject && <span className="messageError">{errors.subject}</span>}
                    </div>
                    <div className="contentInput">
                        <div className="inputLabel">
                            <textarea id="message" type="text" name="message" value={form.message} onChange={handleChange} autoComplete="off"/>
                            <label htmlFor="message" className={`${form.message && 'effectLabel'}`}>Mensaje</label>
                        </div>
                        {errors.message && <span className="messageError">{errors.message}</span>}
                    </div>
                    <Button label="Enviar" icon={<BsArrowRight/>} disabled = {
                        btnDisabled() ||
                        !form.name || 
                        !form.email || 
                        !form.subject ||
                        !form.message}/>
            </form>
        </section>
    )
}

export default Contact;