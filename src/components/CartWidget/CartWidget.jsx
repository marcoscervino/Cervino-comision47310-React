
import { useContext } from "react";
import cartLogo from "../../assets/icons/cart-regular.png";
import { CartContext } from "../../context/cartContext";

export const CartWidget = () => {
    const cartContext = useContext(CartContext)

    console.log({cartContext})
    return(
        <>
        <button className="btn btn-outline-secondary btncarro" id="verCarro"><img src={cartLogo} alt=""/> 1 </button>
        </>
    )
}