import React, { useState, createContext } from 'react';

export const BasketContext = createContext();

export function BasketProvider({ children }) {
    // Creating a basket variable with a function for setting it
    const [basket, setBasket] = useState([]);

    // Function that takes an input and adds it to the basket variable if not there already and adding one to the quantity if it is there already
    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            const item = prevBasket.find((item) => item.id === product.id);

            if (item) {
                return prevBasket.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1} : item
            );
            } else {
                return [...prevBasket, {...product, quantity: 1}];
            }
        });
    };

    // Function to update the number of a product in the basket
    const updateQuantity = (id, quantity) => {
        setBasket((prevBasket) =>
            prevBasket.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };

    // Function to cmopletely remove an item from the basket
    const deleteItem = (id) => {
        setBasket((prevBasket) =>
            prevBasket.filter((item) => item.id !== id)
        );
    };

    // Function that goes through the basket array and adds together the cost of each item to work out the total
    const calculateTotal = () => {
        return basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, updateQuantity, calculateTotal, deleteItem, setBasket }}>
            { children }
        </BasketContext.Provider>
    );
}
