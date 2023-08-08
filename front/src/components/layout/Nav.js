import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return(
      <nav>
        <div>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</ NavLink></li>
            <li><NavLink to="/sinopsis" className={({ isActive }) => isActive ? "activo" : undefined}>Sinopsis</ NavLink></li>
            <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</ NavLink></li>
            <li><NavLink to="/autores" className={({ isActive }) => isActive ? "activo" : undefined}>Autores</ NavLink></li>

          </ul>
        </div>
      </nav>
    );
}

export default Nav;