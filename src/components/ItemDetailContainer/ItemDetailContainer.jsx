import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";

export function ItemDetailContaier () {
    const [IsLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() =>{
        setTimeout(() =>{
            setItem({
                nombre: "Heineken Rubia",
                precio: 360,
                foto: "https://i.postimg.cc/qvnrw3Cs/heineken-x473-v2.png",
            }); 
        }, 2000)
        setIsLoading(false);
    }, []);

    return <>
        {IsLoading ? (<h4>Cargando...</h4>) : (<div> <ItemDetail nombre={item.nombre} precio={item.precio} foto={item.foto}/> </div>)}
    </>;

}