import "./project_card.css"
import { Link } from "react-router-dom"

export function Project_Card({front_text, back_text}){



    return(
        <div className="flip-card project-item">
            <div className="flip-card-inner">
                <div className="flip-card-front flex-center-column">
                    <p>{front_text}</p>
                </div>
                <div className="flip-card-back">
                    <li className="flip-card-back-list-item"><Link to={"/Tutor"}>Typing Tutor</Link></li>
                    {back_text}
                </div>
            </div>
        </div>
    )

}