import profile from "../../assets/profile_pic.jpg"
import "./home.css"
import { Link } from "react-router-dom"
export function Home(){



    return(
        <div id="home">
            <div>
                <div className="container flex-center w300h300">
                    <img src={profile} alt="Layton" />
                </div>
                <div className="container flex-center w300h300">
                    <Link className="link-underline" to={"https://github.com/LaytonWashburn"}>Github</Link>
                    <Link className="link-underline" to={"https://www.linkedin.com/in/layton-washburn/"}>LinkedIn</Link>
                </div>
            </div>
            
            <div className="container flex-center w600h600 font-size-xlarge font-bold">
                Welcome to my Portfolio 
            </div>
            <div className="container flex-column w600h600">
                <p> I am an undergraduate computer science major at Utah State passionate about software, 
                    writing, and learning new topics. My favorite programming language is C++ but python is a close second. I started out 
                    majoring in chemistry and was in a lab class with a friend who was in computer science who convinced me to switch to 
                    computer engineering. I switched and the next semester I was in the Introduction to C programming class. I love to tell this
                    story because it still honestly makes me laugh. I was sitting at the desk trying to turn the monitor on as class was starting
                    and was having trouble. At this point, I was not a tech person at all and did not know anything about computers 
                    as you'll find out shortly. The TA who was teaching was moving quicker than I could figure out how to turn on the computer. I kept hitting
                    the power button and saw the light flash on but to my horror, I was now getting rather behind on the first day. I wouldn't say panic set in
                    so much as a feeling of dread washed over me. Luckily and to my utter embarrassment the 
                    girl sitting next to me leaned over, pushed the power button on the desktop sitting under the desk, and then sat back up.
                    I felt like I had just lived through a cartoon. Needless to say, I have come a long way from not being able to tell the difference 
                    between a monitor and an actual computer. Some of my favorite classes have been compilers, web development, and computer architecture.
                    This portfolio is still under development.</p>
            </div>
        </div>
    )
}