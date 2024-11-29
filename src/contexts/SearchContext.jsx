import React, { useState, createContext } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    // Creating a query variable with a function to set it
    const [query, setQuery] = useState("");

    // Function to filter the products array based on what is in the query
    function search(products) {
        return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    };

    return (
        <SearchContext.Provider value={{ search, query, setQuery }}>
            { children }
        </SearchContext.Provider>
    );
}
