import { useState } from "react"
import { Navdrawer } from "./Navdrawer";
import "../styles.css"

export function Iconbar(){

    const [isOpen, setIsOpen] = useState(false);
    const [style, setStyle] = useState("closed")


    function open(){
        console.log(isOpen);
        console.log(style)
        if(!isOpen){
            setStyle("open closed")
        } else {
            setStyle("closed")
        }
        setIsOpen(!isOpen)
    }



    return(
        <>
            <div className="Iconbar">
                <span className="label"onClick={open}>
                    <span className="material-symbols-outlined" >
                        menu
                    </span>
                    Menu
                </span>
            </div>
            <Navdrawer styles={style}/>
        </>
    )
}