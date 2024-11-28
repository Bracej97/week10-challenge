import React, { useState, createContext } from 'react';
import { products } from '../data';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [query, setQuery] = useState("");

    function search(products) {
        return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    };

    return (
        <SearchContext.Provider value={{ search, query, setQuery }}>
            { children }
        </SearchContext.Provider>
    );
}
