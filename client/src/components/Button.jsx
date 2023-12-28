
const Button = ({label, icon, disabled}) => {

    return (
        <button className="btn btnPrimary" disabled={disabled}>
            {label}
            <span className="icon">{icon}</span>
        </button>
    )
}

export default Button;