import { resume } from "../utils/data";
import ExperienceItem from "../components/ExperienceItem";

const Experiences = () => {
    return (
        <section className="wrapper section containerExperiences">
            <h1 className="title">Experiencias & Estudios</h1>
            <div className="experiences">
                {
                    resume.map(res => {
                        if(res.category === 'experience'){
                            return <ExperienceItem key={res.id} {...res}/>
                        }
                    })
                }
            </div>
            <div className="studies">
                {
                    resume.map(res => {
                        if(res.category === 'education'){
                            return <ExperienceItem key={res.id} {...res}/>
                        }
                    })
                }
            </div>
        </section>
    )
}

export default Experiences