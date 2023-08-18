import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

export function ItemCount () {
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
        if (cantProd === 0){
        setCantProd(count);
        setCount(1);

        
    }else{
        setCantProd(cantProd + count);
        setCount(1);
    }
    cartContext.changeItemCant(cantProd)
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
                <button className="btn btn-dark compra" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    );
    

}

