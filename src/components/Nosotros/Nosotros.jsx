import './nosotros.css';
import imgint from '../../assets/img/best-bar-int.png'

function Nosotros () {
    return(
        <>
        <main>
      <div className="backgrondNosotros bg-black">
      <div className=" title-container d-flex justify-content-center p-5">
        <h1>Best Bar 🥂  - Conocemos lo bueno, Por eso sabemos lo que te gusta</h1>
      </div>

      <div className="container ">
        <div className="row mb-5 mt-5 ">
          <div className="col d-flex justify-content-center">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h2 className="card-title">Nuestra Misión</h2>
                <p className="card-text">En Best Bar 🥂, nos esforzamos por ser la opción preferida de los amantes de las bebidas de calidad en todo el mundo. Nuestra misión es proporcionarte un catálogo cuidadosamente seleccionado de bebidas premium...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="container">
        <div className="row mb-5 mt-5">
          <div className="col d-flex justify-content-center">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h2 className="card-title">¿Buscas promos?</h2>
                <p className="card-text">Aquí podrás encontrar las mejores bebidas, con las mejores promociones. En nuestra tienda de bebidas, te ofrecemos una selección excepcional de productos de alta calidad que satisfarán tu paladar exigente. Desde vinos finos y destilados premium hasta cervezas artesanales, contamos con una amplia variedad para complacer todos los gustos. Además, para que disfrutes al máximo de nuestras bebidas, te brindamos las mejores promociones y descuentos</p>
                <p>¡Veni a conocernos!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-sm d-flex justify-content-center pb-5"><img className="img-fluid" src={imgint} alt=""/></div>
    </div>
    </main>
        </>
    )
}

export default Nosotros