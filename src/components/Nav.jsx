import { useState } from "react";
import { 
    BsFillHouseDoorFill,
    BsPersonFill,
    BsBriefcaseFill,
    BsFillChatLeftTextFill
} from "react-icons/bs";

const Nav = ({scrollToSection}) => {

    return(
        <nav className="nav">
            <div className="buttonsNav">
                <button className="btn active" onClick={() => scrollToSection('banner')}><BsFillHouseDoorFill/></button>
                <button className="btn" onClick={() => scrollToSection('about')}><BsPersonFill/></button>
                <button className="btn" onClick={() => scrollToSection('projects')}><BsBriefcaseFill/></button>
                <button className="btn" onClick={() => scrollToSection('contact')}><BsFillChatLeftTextFill/></button>
            </div>
        </nav>
    )
}

export default Nav;