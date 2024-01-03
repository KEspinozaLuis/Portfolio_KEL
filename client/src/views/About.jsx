import { BsArrowDown } from "react-icons/bs";
import { skills } from "../utils/data";

const About = () => {
    return(
        <section className="wrapper about section" id="about">
            <div className="containerImg">
                <img src="./img/photo-about.webp" alt="foto perfil" />
            </div>
            <div className="containerInfo">
                <h1 className="title">Sobre mí</h1>
                <p className="description"> Front end developer con una fuerte pasión por la creación de experiencias de usuario asombrosas, donde combino la creatividad del diseño con la lógica del código para dar vida a sitios web y aplicaciones atractivas. <br />Mi objetivo es contribuir a la creación de experiencias que no solo funcionen bien, sino que también sorprendan y deleiten a los usuarios.</p>
                <a className="btn btnPrimary" href="https://drive.google.com/file/d/1tvoV2KVG2XSaSAXGLKGt-KrYb2Pt0vfr/view?usp=drive_link" download="CV-KenyEspinoza">
                    Descargar CV
                    <span className="icon"><BsArrowDown /></span>
                </a>
                <div className="containerSkills">
                    <h2 className="titleSkill">Habilidades</h2>
                    <ul className="skills">
                        {
                            skills.map( skill => (
                                <li key={skill.id}> {skill.icon} <p>{skill.tool}</p> </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;