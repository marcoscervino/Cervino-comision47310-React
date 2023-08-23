import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function Cart() {
    const cartContext = useContext(CartContext);

    const totalItemCount = cartContext.cartItems.reduce((total, item) => total + item.cantidad, 0);
    return(
        <>
        <div className="container text-center col-lg">
        <span>Total de items en el carro: {totalItemCount}</span>
        <div className="container text-center col-lg">
        <h2>Carrito de Compras</h2>
        </div>
        </div>
        
            <ul>
                {cartContext.cartItems.map((item) => (
                    <div key={item.id} className="container text-center row">
                    
                        <div className="container text-center col-lg">
                        <p>{item.nombre}</p>
                        </div>
                        <div className="container text-center col-sm">
                        <p>{item.cantidad}</p>
                        </div>
                        <div className="container text-center col-sm">
                        <p> ${item.precio}</p>
                        </div>
                        <div className="container text-center col-sm">
                        <p> ${item.precio * item.cantidad}</p>
                        </div>
                        <div className="container text-center col-sm">
                        <button className="btn btn-danger">X</button>
                        </div>
                    </div>
                ))}
            </ul>
        
        <span>El total a pagar del carro es: ${cartContext.calcularTotalAPagar()}</span>
        </>
    )
}

export default Cart;