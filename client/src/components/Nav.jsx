import { Link, useLocation} from "react-router-dom";
import { links } from "../utils/data";

const Nav = () => {
    const {pathname} = useLocation();

    return(
        <nav className="nav">
            <div className="buttonsNav">
                {
                    links.map( ({id, icon, path}) => (
                        <Link 
                            key={id} 
                            className={`btn ${pathname === path ? 'active' : "" }`}
                            to={path}
                        >{icon}</Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Nav;