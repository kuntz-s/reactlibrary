import React ,{useState , useEffect} from "react"
import firebase from "../firebase"
import Modification from "./Modification"

const InputModification=()=>{
    const [bibliotheque, setBibliotheque]= useState([])

    
    useEffect(() => {
       firebase
            .firestore()
            .collection("bibliothèque")
            .onSnapshot((snapshot)=>{
                const search= snapshot.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data()
                }))
                setBibliotheque(search)
            })
    }, [])

    return(
        <div className="modif">
          
       <div>   <h1>MODIFICATION DE LA LISTE DES LIVRES</h1> </div>
        <ul>
            {bibliotheque.map(biblio => (
                <li key={biblio.id}>
                    <Modification biblio={biblio}/>
                </li>
            ))}
        </ul>
    </div>  
    )
}
export default InputModification