import {BrowserRoutes as Router, Routes, Route} from "react-router-dom";
import {NavbarElements} from "../commponents"
import {Inicio, Calzado,Indumentaria,Accesorios} from "../pages"
export const Mainroutes = () => {
    return(
        <Router>
            <Routes>
                <route exact path="/Inicio" element={<Inicio/>}/>
                <route exact path="/Calzado" element={<Calzado />}/>
                <route exact path="/Accesorios" element={<Accesorios/>}/>
                <route exact path="/Indumentaria" element={<Indumentaria/>}/>
            </Routes>
        </Router>
    )
}