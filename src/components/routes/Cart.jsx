import emptycart from '../../assets/cart/empty-cart-dark-small.png'
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/bestbarlogoxl2.png'



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
                <div className="d-flex justify-content-center container-fluid bg-dark p-2 pedido-confirm">
                <img src={logo} alt="" />
                </div>
                <div className='bg-dark mb-5 pt-1 mt-0 container-fluid'>
                <div className="container text-center col-lg mt-3 cart-title">
                    <span>Total de items en el carro: {totalItemCount}</span>
                    <div className="container text-center col-lg table-title">
                        <h1>Carrito de Compras</h1>
                    </div>
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
                <h4 className='mt-4 mb-4'>El total a pagar del carro es: ${cartContext.calcularTotalAPagar()}</h4>
                <div className='p-1 bg-dark'></div>
                <div className='bg-dark'><Link to="/checkout"><button className='mx-5 mt-3 mb-3'>Finalizar compra</button></Link> </div>
                
                </div>                
            </>
        )
    }

}

export default Cart;