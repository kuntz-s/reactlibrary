import React from "react"
import Header from "./Components/Accueil/Header"
import Footer from "./Components/Accueil/Footer"
import Accueil from "./Components/Accueil/Accueil"
import Ajout from "./Components/Ajout"
import Lecture from "./Components/Lecture"
import InputModification from "./Components/InputModification"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

class App extends React.Component{
    
    
    render(){
        return(
            <Router>
                <Switch>
                    <div>
                        <Header/>
                        <Route path="/" exact component={Accueil}></Route>
                        <Route path="/Ajout" component={Ajout}></Route>
                        <Route path="/Lecture" component={Lecture}></Route>
                        <Route path="/Modification" component={InputModification}></Route>
                        <Footer/>
                    </div>
                </Switch>
            </Router>
           
        )
    }
}

export default App