import { Link } from "react-router-dom";
import navBar from "../css/navBar.css"


const NavBar = () => {
    return (
        <div className="jota">
            <ul className="ul">
                <li>
                    <Link className="home" to="/Equipo">Inicio</Link>
                </li>
                <li>
                    <Link className="productos" to="/ProducListing">Productos</Link>
                </li>
                <li>
                    <Link className="figura" to={'/categoria/namco'}>Contacto</Link>
                </li>
                
            </ul>
        </div>
    )
}
export default NavBar;