import React from "react"
import {Link} from "react-router-dom"

function Presentation(){
    return(
            <section className="presentation">
            <div className="introduction">
                <div className="intro-text">
                    <h1>BIENVENUE DANS LA LIBRAIRIE REACTJS-FIRESTORE</h1>
                    <p>
                        Accéder à notre bibliothèque complète de livres et effectuer des recherches selon 
                        vos besoins
                    </p>
                </div>
                <div className="cta">
                    <Link classNale="cta-select" to="/Lecture">
                        <button className="cta-select">Acceder aux livres</button>
                    </Link>
                </div>
            </div>
            <div className="cover">
                <img src="https://cdn.pixabay.com/photo/2017/11/01/13/18/bookshelf-2907964_960_720.png" alt="librairie"></img>
              
            </div>
        </section>
       
        
       
    )
}
export default Presentation