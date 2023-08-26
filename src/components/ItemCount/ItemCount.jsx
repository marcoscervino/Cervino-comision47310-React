import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

export function ItemCount ({ item }) {
    const cartContext = useContext(CartContext);
    console.log({cartContext})


    let [count, setCount] = useState(1);
    const [cantProd, setCantProd] = useState(0);

    function handleClickSuma() {
        setCount(count + 1);
    }

    
    function handleClickResta() {
        if (count > 1) {
        setCount(count - 1)
        }
        ;
    }

    function onAdd() {
        const newItem = {
            id: item.id,
            nombre: item.nombre,
            tamaño: item.tamaño,
            precio: item.precio,
            cantidad: count,
        };
        cartContext.addItemToCart(newItem);
        setCount(1);
    }
    return (
        <>
            <div className="d-flex justify-content-center ">
                <button className="btn " onClick={handleClickResta}>
                    -
                </button>

                <p className="mt-3">{count}</p>

                <button className="btn" onClick={handleClickSuma}>
                    +
                </button>
            </div>

            <div>
                <button className="btn btn-dark compra mb-3" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    );
    

}

