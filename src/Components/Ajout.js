import React,{useState} from "react"
import firebase from "../firebase"
import { SiFirebase } from "react-icons/si";
import {Link} from "react-router-dom"


const Ajout=()=>{

    const [titre ,setTitre]=useState('');
    const [maisonEdition ,setMaisonEdition]=useState('');
    const [genre ,setGenre]=useState('');
    const [datePublication ,setDatePublication]=useState('');
    const [nomAuteur ,setNomAuteur]=useState('');
    const [dateNaissance ,setDateNaissance]=useState('');
    const [nationalite ,setNationalite]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const db=firebase.firestore();
        db.collection("bibliothèque")
            .add({titre, 
            maison_edition:maisonEdition,
            genre,
            date_publication: datePublication,
            nom_auteur:nomAuteur,
            date_naissance:dateNaissance,
            nationalité: nationalite
            
            })
            .then(()=>{
                setTitre('');
                setMaisonEdition('');
                setGenre('');
                setDatePublication('');
                setNomAuteur('');
                setDateNaissance('');
                setNationalite('')
            })

    }
    
    const handleAjout=()=>{
        setTimeout( ()=>{ alert("livre enregistré, veuillez accéder à la page lecture pour visualiser la modification")},2000)
    }

    return(
    <section className="ajout">
        <form onSubmit={handleSubmit}>
            <div className="titre">
                <label>Titre du livre : </label>
                <input type="text" value={titre} onChange={e=>setTitre(e.target.value)}></input>
            </div>
            <div className="edition">
                <label>Maison d'édition du livre :</label>
                <input type="text" value={maisonEdition} onChange={e=>setMaisonEdition(e.target.value)}></input>
            </div>
            <div className="genre">
                <label>Genre :</label>
                <input type="text" value={genre} onChange={e=>setGenre(e.target.value)}></input>
            </div>
            <div className="publication">
                <label>Date de publication :</label>
                <input type="text" value={datePublication} onChange={e=>setDatePublication(e.target.value)}></input>
            </div>
            <div  className="auteur">
                <label>Nom de l'auteur: </label>
                <input type="text" value={nomAuteur} onChange={e=>setNomAuteur(e.target.value)}></input>
            </div>
            <div className="naissance">
                <label>Date de naissance (jj/mm/aaaa) :</label>
                <input type="text" value={dateNaissance} onChange={e=>setDateNaissance(e.target.value)}></input>
            </div>
            <div className="nationalite">
                <label>Nationalité :</label>
                <input type="text" value={nationalite} onChange={e=>setNationalite(e.target.value)}></input>
            </div>
            <div>
           
            <button className="submit-ajout" onClick={handleAjout}>Soumettre <SiFirebase/></button>
          
                
               
                
               
            </div>
           
        </form>
        
    </section>)
}


export default Ajout