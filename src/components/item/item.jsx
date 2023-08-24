import { Link } from "react-router-dom";

function Item ({ id, foto, nombre, tamaño, precio }) {
    
    return (
        <div className="card mt-3 mb-3 ms-2 mx-2 border-dark text-center col-md-2" key={id}>
            <Link to={`/item/${id}`}><img className="card-img-top" src={foto}></img></Link>
            <div className="card-body">
            <Link to={`/item/${id}`}><h5 className="card-title">{nombre}</h5></Link>
            <span>x{tamaño}</span>
            <p className="card-text">${precio}</p>
            
            </div>
        </div>
    );
}

export default Item;