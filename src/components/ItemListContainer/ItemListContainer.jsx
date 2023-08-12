import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getItems } from "../../asyncMock";

function ItemListContainer(){
        const [isLoading, setIsLoading] = useState(true);
        const [items, setItems] = useState([]);


        useEffect(() =>{
                getItems()
                .then(response => {console.log(response);
                setItems(response);
                })
                .catch(error => console.error(error))
                .finally(()=> setIsLoading(false));
                
        }, []);
        

        return(
                <section className='row justify-content-center' >
                <ItemList itemArray={items}/>
                </section>
        )
}

export default ItemListContainer;