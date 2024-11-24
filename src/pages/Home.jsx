import React from "react";
import { BasketContext } from "../contexts/BasketContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { products } from '../data';

function Home() {
    const { addToBasket } = useContext(BasketContext);

    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2>{product.name}</h2>
                        <p>Price: £{product.price}</p>
                        <Link to={`/product/${product.id}`}>View product</Link>
                        <button onClick={() => addToBasket(product)}>Add to basket</button>
                    </div>
                ))};
            </div>
        </div>
    )
};

export default Home;
