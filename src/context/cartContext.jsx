import { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartProvider ({children}) {
    const [itemCant, setItemCant] = useState(0)

    const changeItemCant = (newItemCant) =>{
        setItemCant(newItemCant);
    }

    return <CartContext.Provider value={{
        itemCant: itemCant,
        changeItemCant: changeItemCant,
    }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;