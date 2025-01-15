import "../www/Resume.css"

export function Resume() {


    return(
       <div className="box">
            <div className="filler"></div>
            <div className="resume">
                <div className="resume-flex-box title">Layton Washburn</div>
                <div className="resume-title-container resume-title resume-start">Education</div>
                <div className="space-between-box">
                    <span className="margin-box">Utah State University (Major: Computer Science)</span> 
                    <span className="margin-box">Spring 2025</span>
                </div>
                <div className="space-between-box">
                    <span className="margin-box">BYUI Online- General Studies</span>
                    <span className="margin-box">September 2020 to December 2020</span>
                </div>
                <div className="resume-title-container resume-title resume-start">Internship Experience</div>
                <div className="space-between-box">
                    <div className="margin-box">Tech Student</div>
                    <div className="margin-box">Current</div>
                </div>
                <div className="space-between-box">
                    <div className="margin-box">DOE SULI</div>
                    <div className="margin-box">May 2023 to July 2023</div>
                </div>
                <div className="space-between-box">
                    <div className="margin-box">Pepperidge Farms: Special Projects Internship</div>
                    <div className="margin-box">May 2022 to January 2023</div>
                </div>
                <div className="resume-title-container resume-title resume-start">Educational Experience</div>
                <ul className="resume-start resume-title-container padding-adj">
                    <li className="padding-adj">Knowledge in C, Python and Java</li>
                    <li className="padding-adj">Currently taking CS 2420 and CS 2410</li>
                    <li className="padding-adj">Self-learned basic Python over Summer 2022</li>
                    <li className="padding-adj">Experience with Microsoft Office</li>
                </ul>
                <div className="resume-title-container resume-title resume-start">Professional Experience</div>
            </div>
            <div className="filler"></div>
        </div>
    )
}