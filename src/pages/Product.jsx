import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BasketContext } from "../contexts/BasketContext";
import { products } from "../data";

function Product() {
    const { addToBasket } = useContext(BasketContext);
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id))

    if (!product) return <p>Product not found.</p>

    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>Price: £{product.price}</p>
            <button onClick={() => {addToBasket(product)}}>Add to basket</button>
        </div>
    );
}

export default Product;
