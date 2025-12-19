import { createContext, useContext, useState, useEffect } from "react";
import { getItemFromLocalStorage, setItemToLocalStorage, clearItemFromLocalStorage, removeItemFromLocalStorage } from "../helpers/helper";
import { STORAGE_KEYS } from "../config/config";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //Load initial cart from localStorage
    useEffect(() => {
        const storedCart = getItemFromLocalStorage(STORAGE_KEYS.CART);
        if (storedCart) setCart(storedCart);
    }, []);

    //persist cart change
    useEffect(() => {
        setItemToLocalStorage(STORAGE_KEYS.CART, cart);
    }, [cart]);

    const addToCart = (item) => {
        setCart((prev) => {
            const exists = prev.find(
                (i) =>
                    i.id = item.id &&
                    i.size === item.size &&
                    i.variant === item.variant
            );

            if (exists) {
                return prev.map((i) => 
                    i.id === item.id &&
                i.variant === item.variant
                ?
                { ...i, qty: i.qty + (item.qty || 1)}
                :
                i
                )
            }

            //push new item
            return [...prev, {...item, qty: item.qty || 1}];
        });
    };

    //update quantity
    const updateQty = (cartItemId, qty) => {
        setCart((prev) => 
            prev.map((item) =>
                item.cartItemId === cartItemId ? { ...item, qty} : item
            )
        );
    };

    //remove item by unique cart item identifier
    const removeFromCart = (cartItemId) => {
        setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    };

    //clear cart entirely
    const clearCart = () => {
        removeItemFromLocalStorage(STORAGE_KEYS.CART);
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart, addToCart, updateQty, removeFromCart, clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);