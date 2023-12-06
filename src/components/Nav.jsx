import { 
    BsFillHouseDoorFill,
    BsPersonFill,
    BsFillClipboard2DataFill,
    BsBriefcaseFill,
    BsFillChatLeftTextFill
} from "react-icons/bs";

const Nav = () => {
    return(
        <nav className="nav">
            <div className="buttonsNav">
                <button className="btn"><BsFillHouseDoorFill/></button>
                <button className="btn"><BsPersonFill/></button>
                <button className="btn"><BsFillClipboard2DataFill/></button>
                <button className="btn"><BsBriefcaseFill/></button>
                <button className="btn"><BsFillChatLeftTextFill/></button>
            </div>
        </nav>
    )
}

export default Nav;