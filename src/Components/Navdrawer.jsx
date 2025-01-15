import { Link } from "react-router-dom"
import "../styles.css"

export function Navdrawer({styles}){


    return(
        <section className={styles} id="menu-options">
            <Link className="drawerlink">Grades</Link>
            <Link className="drawerlink">Skills</Link>
            <Link className="drawerlink">Bio</Link>
            <Link className="drawerlink">Career Goals</Link>
        </section>
    )
}