import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
      <nav>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sinopsis">Sinopsis</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/autores">Autores</Link></li>
          </ul>
        </div>
      </nav>
    );
}

export default Nav;