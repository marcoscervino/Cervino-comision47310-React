import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export function useCartContext() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [carro, setCarro] = useState([]);

    const addItemToCart = (item) => {
        const isInCart = carro.findIndex((cartItem) => cartItem.id === item.id);

        if (isInCart !== -1) {
            // Si el item ya existe, actualizamos la cantidad del item existente
            const actualizarItemsCarro = carro.map((cartItem, index) =>
                index === isInCart
                    ? { ...cartItem, cantidad: cartItem.cantidad + item.cantidad }
                    : cartItem
            );
            setCarro(actualizarItemsCarro);
        } else {
            // Si el item no existe en el carrito, lo agregamos
            setCarro([...carro, item]);
        }
    };

    const calcularTotalAPagar = () => {
        const total = carro.reduce((total, item) => total + item.precio * item.cantidad, 0);
        return total;
    };
    
    return (
        <CartContext.Provider
            value={{
                cartItems: carro,
                addItemToCart,
                calcularTotalAPagar,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;