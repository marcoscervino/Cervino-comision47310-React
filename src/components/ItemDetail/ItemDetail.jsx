import { ItemCount } from "../ItemCount/ItemCount";
import './itemDetail.css'


function ItemDetail (props) {
    const { id, foto, nombre, tamaño, precio, descripcion } = props; 
    return (
        <>
        <div className="card mt-3 mb-3 ms-2 mx-2 border-dark text-center col-md-4" key={id}>
            
            <img className="card-img-top mt-5" src={foto} alt={nombre} />
            
            
        </div>

        <div className="bg-white mt-3 mb-3 ms-2 mx-2 border-dark text-center card col-md-2 detail-container">
        <h5 className="">{nombre} x{tamaño}</h5>
        <h6>{descripcion}</h6>
        <p className="">${precio}</p>
        <br />
        <ItemCount item={{ id, nombre, tamaño, precio }} />
        </div>
        </>
    );
}

export default ItemDetail;