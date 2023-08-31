import mainLogo from '../../assets/logo/best-bar-logo.png';
import { CartWidget } from "../CartWidget/CartWidget.jsx";
import { Link, useParams } from "react-router-dom";

export const NavBar = () => {
  const {category} = useParams();

    return(
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/"><span className="navbar-brand" href="#"><img src={mainLogo} alt=""/></span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/"><span className="nav-link " aria-current="page" href="./index.html">Inicio</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros"><span className="nav-link" href="./pages/nosotros.html">Nosotros</span></Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nuestros productos
                </a>
                <ul className="dropdown-menu">
                  <li> <Link to={`/category/cerveza`}><span className="dropdown-item"  href="#">Cervezas</span></Link> </li>
                  <li><Link to={`/category/gaseosa`}><span className="dropdown-item"  href="#">Gaseosas</span></Link></li>
                  <li><Link to={`/category/gin`}><span className="dropdown-item"  href="#">Gines</span></Link></li>
                  <li><Link to={`/category/vodka`}><span className="dropdown-item"  href="#">Vodkas</span></Link></li>
                  <li><Link to={`/category/vino`}><span className="dropdown-item"  href="#">Vinos</span></Link></li>
                </ul>
              </li>
            </ul>
          
            <CartWidget/>
          </div>
        </div>
        
      </nav>
      </header>
    )
};