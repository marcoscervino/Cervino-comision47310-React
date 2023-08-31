import facebookLogo from '../../assets/icons/facebook-logo.png' 
import twitterLogo from '../../assets/icons/twitter-logo.png' 
import tiktokLogo from '../../assets/icons/tiktok-logo.png' 
import instagramLogo from '../../assets/icons/instagram-logo.png' 
import { Link } from 'react-router-dom'

function Footer(){


    return(
        <>
        <footer>
      
        <div className='p-1 bg-dark'></div>
        <div className="footer-dark">
            
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Conocenos</h3>
                            <ul>
                                <li><Link to={"/nosotros"}><span href="./pages/nosotros.html">Nosotros</span></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Best Bar 🍷</h3>
                            <p>El lugar perfecto para satisfacer tus gustos y sed de sabores únicos. Nuestro amplio catálogo incluye una cuidadosa selección de bebidas de alta calidad, desde refrescantes aguas y jugos naturales hasta vinos finos y cervezas artesanales.</p>
                        </div>
                        <div className="col item social">
                          <a href="#"><img src={facebookLogo} alt="facebook"/></a>
                          <a href="#"><img src={twitterLogo} alt="twitter"/></a>
                          <a href="#"><img src={tiktokLogo} alt="tiktok"/></a>
                          <a href="#"><img src={instagramLogo} alt="instagram"/></a>
                        </div>
                    </div>
                    <p className="copyright">Marcos Cervino © 2023</p>
                </div>
            
        </div>
      
    </footer>
        </>
    )
}

export default Footer