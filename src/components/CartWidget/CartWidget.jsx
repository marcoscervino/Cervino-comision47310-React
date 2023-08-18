
import { useContext } from "react";
import cartLogo from "../../assets/icons/cart-regular.png";
import { CartContext } from "../../context/cartContext";

export const CartWidget = () => {
    const cartContext = useContext(CartContext);

    const totalItemCount = cartContext.cartItems.reduce((total, item) => total + item.cantidad, 0);

    
    return(
        <>
        <button className="btn btn-outline-secondary btncarro" id="verCarro">
                <img src={cartLogo} alt="" /> {totalItemCount}
            </button>
        </>
    )
}