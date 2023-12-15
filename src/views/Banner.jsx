import { Link } from "react-router-dom";
import { 
    BsFillEnvelopeFill, 
    BsLinkedin, 
    BsGithub,
    BsArrowRight } from "react-icons/bs";
    
import Button from "../components/Button";

const Banner = () => {
    return (
        <section className="wrapper banner section" id="banner">
            <div className="containerImg">
                <img src="./img/avatar.svg" alt="foto perfil" />
            </div>
            <div className="containerInfo">
                <div className="content info">
                    <h1 className="title">Keny Espinoza</h1>
                    <span className="role">Front end Developer</span>
                </div>
                <div className="content description">
                    <p>Fuerte pasión por la creación de experiencias de usuario asombrosas combinando la creatividad del diseño con la lógica del código.</p>
                </div>
                <div className="content">
                    <Link to="/about">
                        <Button label="Sobre mí" icon={<BsArrowRight/>}/>
                    </Link>
                </div>
                <div className="content social">
                    <a href="mailto:kespinozaluis@gmail.com"><BsFillEnvelopeFill /></a>
                    <a href="https://www.linkedin.com/in/keny-espinoza-luis-45b8b5193/" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com/KEspinozaLuis/" target="_blank"><BsGithub /></a>
                </div>
            </div>
        </section>
    )
}

export default Banner;