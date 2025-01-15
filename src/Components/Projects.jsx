import { Link } from "react-router-dom"
import "../www/Projects.css"

export function Projects(){

    const links = ["/Tutor", "/Compiler"];

    return(
        <div>
            <Link to={"/Tutor"}>Typing Tutor</Link>
            <Link to={"/Compiler"}>Compiler</Link>
        </div>
    )
}

