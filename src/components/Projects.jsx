
const Projects = () => {
    return (
        <section className="wrapper section projects" id="projects">
            <h1 className="title">Proyectos</h1>
            <div className="containerProjects">
                <div className="project">
                    <img src="./projects/puraVidaViajes.png" alt="Pura Vida Viajes Premium" />
                    <div className="decriptionProject">
                        <h2>Viajes Pura Vida</h2>
                        <div className="containerBtns">
                            <a href="https://client-puravidas-projects.vercel.app/" target="_blank" className="btn btnPrimary">Demo</a>
                            <a href="https://github.com/KEspinozaLuis/PF_ViajesPuraVidaPremium" target="_blank" className="btn btnPrimary">Github</a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src="./projects/Pokedex.png" alt="" />
                    <div className="decriptionProject">
                        <h2>Pokedex</h2>
                        <div className="containerBtns">
                            <a href="" target="_blank" className="btn btnPrimary">Demo</a>
                            <a href="https://github.com/KEspinozaLuis/Pokedex" target="_blank" className="btn btnPrimary">Github</a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src="./projects/PIDogs.png" alt="" />
                    <div className="decriptionProject">
                        <h2>Dogs Api</h2>
                        <div className="containerBtns">
                            <a href="" target="_blank" className="btn btnPrimary">Demo</a>
                            <a href="https://github.com/KEspinozaLuis/PI_Dogs" target="_blank" className="btn btnPrimary">Github</a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src="./projects/puraVidaViajes.png" alt="Pura Vida Viajes Premium" />
                    <div className="decriptionProject">
                        <h2>Esquina Verde</h2>
                        <div className="containerBtns">
                            <a href="" target="_blank" className="btn btnPrimary">Demo</a>
                            <a href="" target="_blank" className="btn btnPrimary">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;