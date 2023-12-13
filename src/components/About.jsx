import { 
    BiLogoReact,
    BiLogoJavascript,
    BiLogoRedux,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoSass,
    BiLogoBootstrap,
    BiLogoTailwindCss,
    BiLogoNodejs,
    BiLogoGit
} from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import Button from "./Button";

const About = () => {
    return(
        <section className="wrapper about section" id="about">
            <div className="containerImg">
                <img src="./img/avatar.svg" alt="foto perfil" />
            </div>
            <div className="containerInfo">
                <h1 className="title">Sobre mí</h1>
                <p className="description"> Front end developer con una fuerte pasión por la creación de experiencias de usuario asombrosas, donde combino la creatividad del diseño con la lógica del código para dar vida a sitios web y aplicaciones atractivas. <br />Mi objetivo es contribuir a la creación de experiencias que no solo funcionen bien, sino que también sorprendan y deleiten a los usuarios.</p>
                <Button label="Descargar CV" icon={<BsArrowDown/>}/>
                <div className="containerSkills">
                    <h2 className="titleSkill">Habilidades</h2>
                    <ul className="skills">
                        <li><BiLogoReact/> <p>React</p></li>
                        <li><BiLogoJavascript/><p>JavaScript</p></li>
                        <li><BiLogoRedux/><p>Redux</p></li>
                        <li><BiLogoHtml5 /><p>Html</p></li>
                        <li><BiLogoCss3/><p>Css</p></li>
                        <li><BiLogoSass/><p>Sass</p></li>
                        <li><BiLogoBootstrap/><p>Bootstrap</p></li>
                        <li><BiLogoTailwindCss/><p>Tailwind</p></li>
                        <li><BiLogoNodejs/><p>Node Js</p></li>
                        <li><BiLogoGit/><p>Git</p></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;