import { Link } from "react-router-dom"
import "./navbar.css"

export function Navbar(){




    return(
        <nav aria-label="Main Navigation" id="navbar" className="font-bold">
            <ul id="navbar-left">
                <li className="navbar-link"><Link>Profile</Link></li>
                <li className="navbar-link"><Link to={"/Experience"}>Experience</Link></li>
                <li className="navbar-link"><Link to={"/Projects"}>Projects</Link></li>
                <li className="navbar-link"><Link>Study</Link></li>
            </ul>
        </nav>
    )
}