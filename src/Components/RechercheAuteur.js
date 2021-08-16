import React, { useState, useEffect } from "react"
import firebase from "../firebase"

const RechercheAuteur = () => {
    const [titre, setTitre] = useState('')
    const [recherche, setRecherche] = useState([])

    useEffect(() => {


        firebase
            .firestore()
            .collection("bibliothèque")
            .where('nom_auteur', '==', titre)
            .onSnapshot((snapshot) => {
                const search = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setRecherche(search)
            })



    }, [titre])

    return (
        <div className="rec">
        <h3>Recherche en <br></br>fonction du nom de l'auteur</h3>
        <input type="text" value={titre} onChange={e=>setTitre(e.target.value) } placeholder="recherche nom auteur"></input>
        <ul>
            {recherche.map(rec=>( 
                <li key={rec.id}>
                   <div>
                       <div><img src="https://cdn.pixabay.com/photo/2014/04/02/14/12/book-306468_1280.png"></img></div>
                        <div className="titre-r">
                            <p>Titre</p>
                            <span>{rec.titre}</span>
                        </div>
                        <div className="auteur-r">
                            <p>Nom de l'auteur</p>
                            <span>{rec.nom_auteur}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default RechercheAuteur