
const ProjectItem = ({img, name, demo, repository}) => {

    console.log(img, name, demo, repository)
  return (
    <div className="project">
        <img src={img} alt={name} />
        <div className="decriptionProject">
            <h2>{name}</h2>
            <div className="containerBtns">
                <a href={demo} target="_blank" className="btn btnPrimary"> Demo </a>
                <a href={repository} target="_blank" className="btn btnPrimary">Github</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem;

