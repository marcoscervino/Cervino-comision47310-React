import emptycart from '../../assets/cart/empty-cart-dark-small.png'
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom';
import FormCompra from '../FormCompra/FormCompra';



function Cart() {
    const cartContext = useContext(CartContext);

    const totalItemCount = cartContext.cartItems.reduce((total, item) => total + item.cantidad, 0);
    // Si el carro esta vacio renderizo
    if (cartContext.cartItems.length === 0) {
        return (
            <><div className='d-flex flex-column bg-black align-items-center'>
                
                <img className='imgcart' src={emptycart} alt="" />
                <Link to={"/"}> <button className='mx-5 mt-3 mb-3'>Volver al inicio</button></Link>
            </div></>
        )
        
    } else {
        // Si el carro contiene items renderizo esto 
        return (


            <>

                <div className="container text-center col-lg mt-3">
                    <span>Total de items en el carro: {totalItemCount}</span>
                    <div className="container text-center col-lg table-title">
                        <h2>Carrito de Compras</h2>
                    </div>
                </div>

                <div className="px-5 ">
                    <table className="table align-middle mb-0 bg-white table-fill">
                        <thead>
                            <tr>
                                <th className="text-left table-head">Producto</th>
                                <th className="text-left table-head">Cant</th>
                                <th className="text-left table-head">Precio</th>
                                <th className="text-left table-head">Sub Total</th>
                                <th className="text-center table-head">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="table-hover">
                            {cartContext.cartItems.map((item) => (
                                <tr key={item.id}>
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

                                    <td className="text-center">
                                        <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => cartContext.removeItem(item.id)}>
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='d-flex flex-column text-center'>
                <span className='mt-4 mb-4'>El total a pagar del carro es: ${cartContext.calcularTotalAPagar()}</span>
                <div className='p-1 bg-dark'></div>
                <FormCompra/>   
                <button className='mx-5 mt-3 mb-3' onClick={cartContext.finalizarCompra}>Finalizar compra</button>        
                
                </div>                
            </>
        )
    }

}

export default Cart;