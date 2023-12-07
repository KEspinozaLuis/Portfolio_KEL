
const About = () => {
    return(
        <section className="wrapper about section" id="about">
            <div className="containerImg">
                <img src="./img/avatar.svg" alt="foto perfil" />
            </div>
            <div className="containerInfo">
                <h1 className="title">Sobre mí</h1>
                <p className="description"> Front end developer con una fuerte pasión por la creación de experiencias de usuario asombrosas, donde combino la creatividad del diseño con la lógica del código para dar vida a sitios web y aplicaciones atractivas. <br />Mi objetivo es contribuir a la creación de experiencias que no solo funcionen bien, sino que también sorprendan y deleiten a los usuarios.</p>
                <button className="btn btnPrimary cv">Descargar CV</button>
                <div className="containerSkills">
                    <h2 className="titleSkill">Habilidades</h2>
                    <ul className="skills">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Redux</li>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Sass</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>Node Js</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;