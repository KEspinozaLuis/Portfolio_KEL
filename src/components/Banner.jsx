import { BsFillEnvelopeFill, BsLinkedin, BsGithub } from "react-icons/bs";

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
                <div className="content buttons">
                    <button className="btn btnPrimary">Contacto</button>
                    <button className="btn textProject">Proyectos</button>
                </div>
                <div className="content social">
                    <a href=""><BsFillEnvelopeFill /></a>
                    <a href=""><BsLinkedin /></a>
                    <a href=""><BsGithub /></a>
                </div>
            </div>
        </section>
    )
}

export default Banner;