import "./project_card.css"
import { Link } from "react-router-dom"

export function Project_Card({front_text, back_text, link}){



    return(
        <Link className="flip-card project-item" to={link}>
                <div className="flip-card-inner">
                    <div className="flip-card-front flex-center-column">
                        <p>{front_text}</p>
                    </div>
                    <div className="flip-card-back">
                        <li className="flip-card-back-list-item"></li>
                        {back_text}
                    </div>
                </div>
        </Link>

    )

}