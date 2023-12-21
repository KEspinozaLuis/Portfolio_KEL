import { projects } from "../utils/data";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
    return (
        <section className="wrapper section projects" id="projects">
            <h1 className="title">Proyectos</h1>
            <div className="containerProjects">
                {
                    projects.map( project => (
                        <ProjectItem key={project.id} {...project}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;