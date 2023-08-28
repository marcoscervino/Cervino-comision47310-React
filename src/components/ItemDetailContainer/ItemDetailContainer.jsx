import { useEffect, useState } from "react";
import { getItem } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


function ItemDetailContainer(){
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);
    const Params = useParams();
const itemId = Params.id; // Convierte la cadena a número

useEffect(() => {

    const docRef = doc(db, "productos", itemId);
    getDoc(docRef).then((resp) => {
        setItem(
            {...resp.data(), id: resp.id}
        );
    })
    
        
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
}, []);

    if (isLoading) return <Loader/>

    return(
    //  id, foto, nombre, tamaño, precio  
        <>
        <section className='row justify-content-center bg-dark mx-0' >
        <ItemDetail
        id={item.id}
        foto={item.foto}
        nombre={item.nombre}
        tamaño={item.tamaño}
        precio={item.precio}
        descripcion={item.descripcion}
        />
        </section>
        </>
    )

}

export default ItemDetailContainer