import React, { useState, createContext } from 'react';

export const BasketContext = createContext();

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            const item = prevBasket.find((item) => item.id === product.id);
            if (item) {
                return prevBasket.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1} : item
            );
            } else {
                return [...prevBasket, {product, quantity: 1}];
            }
        });
    };

    const updateQuantity = (id, quantity) => {
        setBasket((prevBasket) =>
            prevBasket.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };

    const calculateTotal = () => {
        return basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, updateQuantity, calculateTotal }}>
            { children }
        </BasketContext.Provider>
    );
}