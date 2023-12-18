import { Link} from "react-router-dom";
import { useState } from "react";
import { links } from "../utils/data";

const Nav = () => {
    
    const [active, setActive] = useState("/");

    return(
        <nav className="nav">
            <div className="buttonsNav">
                {
                    links.map( ({id, icon, path}) => (
                        <Link 
                            key={id} 
                            className={`btn ${active === path ? 'active' : "" }`}
                            to={path}
                            onClick={() => setActive(path)}
                        >{icon}</Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Nav;