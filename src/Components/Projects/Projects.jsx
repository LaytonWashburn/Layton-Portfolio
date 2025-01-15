import { Link } from "react-router-dom"
import { Project_Card } from "./Project_Card"
import "./projects.css"


export function Projects(){

    return(
        <div id="projects">
            <div className="flex items-center justify-center bg-grey-100 font-bold text-white-50">My Projects</div>
            <div className="flex items-center justify-center bg-grey-50">Hover on card to see project and description. 
                Click on the project name once the card flips to navigate to project</div>
            <ul id="project-grid">
                <Project_Card front_text="Typing Tutor" back_text={ 
                <div>
                    <p>CS 2610 (Web Dev) React project</p> 
                 </div>}
                 link={"/Tutor"}
                />
                <Project_Card front_text="HTML Parser" back_text={
                    <div>
                        <p>Simple HTML Parser written in python to mimic what happens in the DOM.</p>
                    </div>
                }
                link={"https://github.com/LaytonWashburn/PythonHTMLParser"}/>
                {/* <li className="project-item">3</li>
                <li className="project-item">4</li>
                <li className="project-item">5</li>
                <li className="project-item">6</li>
                <li className="project-item">7</li>
                <li className="project-item">8</li>
                <li className="project-item">9</li> */}
            </ul>
        </div>
    )
}