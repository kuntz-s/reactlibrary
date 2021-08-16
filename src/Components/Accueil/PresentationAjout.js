import React from "react"
import {Link} from "react-router-dom"

function PresentationAjout(){
    return(
        <section className="presentation-a">
        <div className="introduction">
            <div className="intro-text">
                <h1>AJOUTER DES LIVRES DANS LA LIBRAIRIE REACTJS-FIRESTORE</h1>
                <p>
                   Vous desirez publier un livre? Nous vous offrons la possibilité de le faire.
                   Cliquer sur le lien pour accéder à la page.
                </p>
            </div>
            <div className="cta">
                <Link classNale="cta-select" to="/Ajout">
                    <button className="cta-select">Ajouter un livre</button>
                </Link>
            </div>
        </div>
        <div className="cover">
            <img src="https://cdn.pixabay.com/photo/2012/04/03/13/26/book-25155_960_720.png" alt="librairie"></img>
          
        </div>
    </section>
    )
}

export default PresentationAjout