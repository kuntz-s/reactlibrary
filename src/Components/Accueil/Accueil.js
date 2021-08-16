import React from "react"
import Presentation from "./Presentation"
import PresentationAjout from "./PresentationAjout"
import PresentationModifier from "./PresentationModifier"



function Accueil(){
    return(
            <div>
                
              
                <Presentation/>
                <PresentationAjout/>
                <PresentationModifier/>

               
               
            </div>

        

    )
}


export default Accueil