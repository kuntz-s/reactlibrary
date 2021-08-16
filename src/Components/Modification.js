import React, { useState } from "react"
import firebase from "../firebase"
import { SiFirebase } from "react-icons/si"
import {Link} from "react-router-dom"

const Modification = ({ biblio }) => {

    const [titre, setTitre] = useState(biblio.titre);
    const [maisonEdition, setMaisonEdition] = useState(biblio.maison_edition);
    const [genre, setGenre] = useState(biblio.genre);
    const [datePublication, setDatePublication] = useState(biblio.date_publication);
    const [nomAuteur, setNomAuteur] = useState(biblio.nom_auteur);
    const [dateNaissance, setDateNaissance] = useState(biblio.date_naissance);
    const [nationalite, setNationalite] = useState(biblio.nationalité);
    const db = firebase.firestore()

    const handleUpdate = () => {
        db.collection("bibliothèque").doc(biblio.id).set({
            titre,
            genre,
            maison_edition: maisonEdition,
            date_publication: datePublication,
            nom_auteur: nomAuteur,
            date_naissance: dateNaissance,
            nationalité: nationalite
        })
    }

    const handleDelete = () => {
        db.collection("bibliothèque").doc(biblio.id).delete()
    }




    return (


        <section className="modification">
            <div className="titre-m">
                <label>Titre du livre : </label>
                <input type="text" value={titre} onChange={e => setTitre(e.target.value)}></input>
            </div>
            <div className="edition-m">
                <label>Maison d'édition du livre :</label>
                <input type="text" value={maisonEdition} onChange={e => setMaisonEdition(e.target.value)}></input>
            </div>
            <div className="genre-m">
                <label>Genre :</label>
                <input type="text" value={genre} onChange={e => setGenre(e.target.value)}></input>
            </div>
            <div className="publication-m">
                <label>Date de publication :</label>
                <input type="text" value={datePublication} onChange={e => setDatePublication(e.target.value)}></input>
            </div>
            <div className="auteur-m">
                <label>Nom de l'auteur: </label>
                <input type="text" value={nomAuteur} onChange={e => setNomAuteur(e.target.value)}></input>
            </div>
            <div className="naissance-m">
                <label>Date de naissance (jj/mm/aaaa) :</label>
                <input type="text" value={dateNaissance} onChange={e => setDateNaissance(e.target.value)}></input>
            </div>
            <div className="nationalite-m">
                <label>Nationalité :</label>
                <input type="text" value={nationalite} onChange={e => setNationalite(e.target.value)}></input>
            </div>
            <div>
                <Link to="/Lecture">
                <button className="submit-modifier" onClick={handleUpdate}>Modifier <SiFirebase /></button>
                </Link>
            </div>
            <div>
                <button className="submit-supprimer" onClick={handleDelete}>Supprimer <SiFirebase /></button>
            </div>

        </section>



    )
}
export default Modification