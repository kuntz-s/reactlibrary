import React from "react"
import {GiWhiteBook} from "react-icons/gi"
import {RiGitlabFill} from "react-icons/ri"
import {Link} from "react-router-dom"



function Header(){
    
    return(
        <header>
            <div className="logo-container"> 
                <GiWhiteBook className="icon"/>
                <h4 className="logo">React Library</h4>
            </div>
            <nav>
                <ul className="nav-links">
                   <Link className="link" to="/">
                    <li>Accueil</li>
                   </Link>
                   <Link  className="link" to="/Lecture">
                    <li>Lecture</li>
                   </Link>
                   <Link className="link"  to="/Ajout">
                    <li>Ajout</li>
                   </Link>
                   <Link className="link" to="/Modification">
                    <li>Modification</li>
                   </Link>
                </ul>
            </nav>
            <div className="gitlab">
               <a href="https://gitlab.com/kuntzstephane/reactlibrary" ><RiGitlabFill className="icon" /></a>
            </div>
            

        </header>
    )
}

export default Header