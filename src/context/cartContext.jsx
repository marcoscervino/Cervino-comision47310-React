import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export function useCartContext() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };
    
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;