import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getItemCategory, getItems } from "../../asyncMock";
import { useParams } from "react-router-dom";

function ItemListContainer(){
        const [isLoading, setIsLoading] = useState(true);
        const [items, setItems] = useState([]);
        const { category } = useParams(); // Obtener la categoría de la URL


        useEffect(() => {
                if (category) {
                        getItemCategory(category) // Llama a getItemCategory si hay una categoría en la URL
                                .then(response => {
                                        console.log(response);
                                        setItems(response);
                                })
                                .catch(error => console.error(error))
                                .finally(() => setIsLoading(false));
                } else {
                        getItems() // Llama a getItems si no hay categoría en la URL
                                .then(response => {
                                        console.log(response);
                                        setItems(response);
                                })
                                .catch(error => console.error(error))
                                .finally(() => setIsLoading(false));
                }
        }, [category]); // Vuelve a ejecutar el efecto cuando cambie la categoría de la URL

        
if (isLoading) return <p>cargando...</p>
        return(
                <section className='row justify-content-center' >
                <ItemList itemArray={items}/>
                </section>
        )
}

export default ItemListContainer;