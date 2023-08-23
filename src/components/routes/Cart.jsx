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

        <table className="table align-middle mb-0 bg-white">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cant</th>
                            <th>Precio</th>
                            <th>Sub Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartContext.cartItems.map((item) => (
                        <tr>
                            <td>
                            <div className="d-flex align-items-center">
                            <p>{item.nombre}</p>
                            </div>
                            </td>

                            <td>
                            <p>{item.cantidad}</p>
                            </td>

                            <td>
                            <p> ${item.precio}</p>
                            </td>

                            <td>
                            <p> ${item.precio * item.cantidad}</p>
                            </td>

                            <td>
                                <button type="button" class="btn btn-link btn-sm btn-rounded" onClick={() => cartContext.removeItem(item.id)}>
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
        </table>

        <span>El total a pagar del carro es: ${cartContext.calcularTotalAPagar()}</span>
        </>
    )
}

export default Cart;