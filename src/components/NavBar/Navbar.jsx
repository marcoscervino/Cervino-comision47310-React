import mainLogo from '../../assets/logo/best-bar-logo.png';
import searchIcon from '../../assets/icons/search-icon.png';
import { CartWidget } from "../CartWidget/CartWidget.jsx";

export const NavBar = () => {

    return(
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={mainLogo} alt=""/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/nosotros.html">Nosotros</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nuestros productos
                </a>
                <ul class="dropdown-menu">
                  <li><a className="dropdown-item" id="filtroCervezas" href="#">Cervezas</a></li>
                  <li><a className="dropdown-item" id="filtroGaseosas" href="#">Gaseosas</a></li>
                  <li><a className="dropdown-item" id="filtroGines" href="#">Gines</a></li>
                  <li><a className="dropdown-item" id="filtroVodkas" href="#">Vodkas</a></li>
                  <li><a className="dropdown-item" id="filtroVinos" href="#">Vinos</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" id="filtroNombre" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-outline-secondary btnBuscar" id="botonNombre" type="submit"><img src={searchIcon} alt=""/></button>
            </form>
            <CartWidget/>
          </div>
        </div>
        
      </nav>
      </header>
    )
};