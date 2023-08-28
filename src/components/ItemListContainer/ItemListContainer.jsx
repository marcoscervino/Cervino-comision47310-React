import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemListContainer(){
        const [isLoading, setIsLoading] = useState(true);
        const [items, setItems] = useState([]);
        const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado para el término de búsqueda
        const category = useParams().category; // Obtener la categoría de la URL


        useEffect(() => {

                const productosRef = collection(db, "productos");

                const consultaCategoria = category ? (query(productosRef, where("categoria", "==", category))) : productosRef;

                getDocs(consultaCategoria)
                        .then((resp) => {
                                setItems(
                                        resp.docs.map((doc) => {
                                                return { ...doc.data(), id: doc.id }
                                        })
                                )
                        }).catch(error => console.error(error))
                        .finally(() => setIsLoading(false));
                
        }, [category]); // Vuelve a ejecutar el efecto cuando cambie la categoría de la URL

        
if (isLoading) return <Loader/>

const filteredItems = items.filter(item =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
        return(
                <section className='row justify-content-center bg-dark mx-0'>
                    <form className="d-flex">
                        <input
                            className="form-control mx-5 mt-3"
                            id="filtroNombre"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search"
                            onChange={e => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
                            value={searchTerm}
                        />
                        
                    </form>
                    <ItemList itemArray={filteredItems} />
                </section>
            );


}

export default ItemListContainer;