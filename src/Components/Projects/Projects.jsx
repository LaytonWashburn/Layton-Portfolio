import { Link } from "react-router-dom"
import { Project_Card } from "./Project_Card"
import "./projects.css"


export function Projects(){

    return(
        <div id="projects">
            <div>Here are my Projects</div>
            <div>Hover on card to see project and description. 
                Click on the project name once the card flips to navigate to project</div>
            <ul id="project-grid">
                <Project_Card front_text="Typing Tutor" back_text={ 
                <div>
                    <p>Test</p>
                    <p>CS 2610 react project</p> 
                 </div>}
                />
                <li className="project-item"><Link>2</Link></li>
                <li className="project-item">3</li>
                <li className="project-item">4</li>
                <li className="project-item">5</li>
                <li className="project-item">6</li>
                <li className="project-item">7</li>
                <li className="project-item">8</li>
                <li className="project-item">9</li>
            </ul>
        </div>
    )
}