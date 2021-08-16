import React, { useState, useEffect } from "react"
import firebase from "../firebase"
import Recherche from "./Recherche"
import RechercheAuteur from "./RechercheAuteur"

const Lecture = () => {
    const [bibliotheque, setBibliotheque] = useState([])


    useEffect(() => {
        firebase
            .firestore()
            .collection("bibliothèque")
            .onSnapshot((snapshot) => {
                const search = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setBibliotheque(search)
            })
    }, [])

    return (
        <section >
            <p><h1 className="livre">LISTE DE TOUT LES LIVRES PRESENTS DANS LA LIBRAIRIE</h1></p>
             <div className="lecture">
            
            <Recherche className="recherche" />
            <ul className="ul">
                
                {bibliotheque.map(biblio => (
                    <li key={biblio.id}>
                        <div className="lec">
                            <div className="rien">
                              <div>  <img src="https://cdn.pixabay.com/photo/2014/04/02/14/12/book-306468_1280.png"></img></div>
                                <p className="i">Informations sur le livre</p>
                                <div className="titre-a">
                                    <p>Titre:</p><span>{biblio.titre}</span>
                                </div>
                                <div className="edition-a">
                                <p>Maison d'édition: </p>
                                <span>{biblio.maison_edition}</span>
                                </div>
                                <div className="publication-a">
                                <p>Date de publication: </p>
                                <span>{biblio.date_publication}</span>
                                </div>
                                <div className="genre-a">
                                <p>Genre: </p>
                                <span>{biblio.genre}</span>
                                </div>
                                <p className="i">Informations sur l'auteur</p>
                                <div className="auteur-a">
                                <p>Nom de l'auteur: </p>
                                <span>{biblio.nom_auteur}</span>
                                </div>
                                <div className="naissance-a">
                                <p>Date de naissance: </p> 
                                <span>{biblio.date_naissance}</span>
                                </div>
                                <div className="nationalite-a">
                                <p>Nationalité</p>
                                <span>{biblio.nationalité}</span>
                                </div>

                            </div>

                        </div>
                    </li>
                ))}
            </ul>
           
            <RechercheAuteur className="rechercheauteur"/>
        </div>
        </section>
       
    )
}
export default Lecture