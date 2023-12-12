import { useState } from "react";
import { 
    BsFillGeoAltFill, 
    BsFillEnvelopeFill, 
    BsFillTelephoneFill 
} from "react-icons/bs";

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (event)=> {
        const value = event.target.value;
        const property = event.target.name;
        setForm({...form, [property]: value})
        setActive(!active);
    }

    return (
        <section className="wrapper section contact">
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
            <form action="" className="contactForm">
                    <div className="contentInput">
                        <input id="name" type="text" name="name" value={form.name} onChange={handleChange}/>
                        <label htmlFor="name" className={`${form.name && 'effectLabel'}`}>Tu nombre</label>
                    </div>
                    <div className="contentInput">
                        <input id="email" type="text" name="email" value={form.email} onChange={handleChange}/>
                        <label htmlFor="email" className={`${form.email && 'effectLabel'}`}>Tu correo</label>
                    </div>
                    <div className="contentInput">
                        <input id="subject" type="text" name="subject" value={form.subject} onChange={handleChange}/>
                        <label htmlFor="subject" className={`${form.subject && 'effectLabel'}`}>Asunto</label>
                    </div>
                    <div className="contentInput">
                        <textarea id="message" type="text" name="message" value={form.message} onChange={handleChange}/>
                        <label htmlFor="message" className={`${form.message && 'effectLabel'}`}>Mensaje</label>
                    </div>
                    <button className="btn btnPrimary">Enviar</button>
            </form>
        </section>
    )
}

export default Contact;