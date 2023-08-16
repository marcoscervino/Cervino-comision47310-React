
import cartLogo from "../../assets/icons/cart-regular.png";

export const CartWidget = () => {
    return(
        <>
        <button className="btn btn-outline-secondary btncarro" id="verCarro"><img src={cartLogo} alt=""/> 1 </button>
        </>
    )
}