import { useState } from "react";

export function ItemCount () {
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
        setCantProd(count);
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
                <button className="btn btn-dark compra" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    );
    

}

