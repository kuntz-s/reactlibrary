import React from "react"
import {Link} from "react-router-dom"

function PresentationModifier(){
    return(
        <section className="presentation-a">
        <div className="introduction">
            <div className="intro-text">
                <h1>MODIFIER OU SUPPRIMER DES LIVRES DANS LA LIBRAIRIE REACTJS-FIRESTORE</h1>
                <p>
                    Vous avez la possibilié de modifier ou de supprimer votre livre et ainsi d'y apporter de nouvelles mises a jour
                    constante, cliquez ici pour pouvoir le faire
                </p>
            </div>
            <div className="cta">
                <Link classNale="cta-select" to="/Modification">
                    <button className="cta-select">Modifier/Supprimer un livre</button>
                </Link>
            </div>
        </div>
        <div className="cover">
            <img src="https://cdn.pixabay.com/photo/2019/12/17/21/23/pen-4702531_960_720.png" alt="librairie"></img>
          
        </div>
    </section>
    )
}


export default PresentationModifier