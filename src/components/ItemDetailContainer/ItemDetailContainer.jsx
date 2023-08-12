import { useEffect, useState } from "react";
import { getItem } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);
    const Params = useParams();
const itemId = parseInt(Params.id, 10); // Convierte la cadena a número

useEffect(() => {
    getItem(itemId)
        .then(result => {
            console.log(result);
            setItem(result);
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
}, []);

    if (isLoading) return <p>Cargando...</p>

    return(
    //  id, foto, nombre, tamaño, precio  
        <>
        <section className='row justify-content-center' >
        <ItemDetail
        id={item.id}
        foto={item.foto}
        nombre={item.nombre}
        tamaño={item.tamaño}
        precio={item.precio}
        />
        </section>
        </>
    )

}

export default ItemDetailContainer