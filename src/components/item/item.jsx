import { ItemCount } from "../ItemCount/ItemCount";

function Item (props) {
    const { id, foto, nombre, tamaño, precio } = props; 
    return (
        <div className="card mt-3 mb-3 ms-2 mx-2 border-dark text-center col-md-2" key={id}>
            <img className="card-img-top" src={foto}></img>
            <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <span>x{tamaño}</span>
            <p className="card-text">${precio}</p>
            <ItemCount/>
            </div>
        </div>
    );
}

export default Item;