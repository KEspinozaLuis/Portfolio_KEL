
const Button = ({label, icon}) => {

    return (
        <>
        
        <button className="btn btnPrimary">
            {label}
            <span className="icon">{icon}</span>
        </button>
        </>
    )
}

export default Button;