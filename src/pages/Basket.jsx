import React, { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";

function Basket() {
    const { basket, updateQuantity, calculateTotal } = useContext(BasketContext);

    return (
        <div>
            <h1>Your basket</h1>
            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <div>
                    {basket.map((item) => (
                        <div key={item.id} className="basket-item">
                            <h3>{item.name}</h3>
                            <p>Price: £{item.price}</p>
                            <label>
                                Quantity:
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                />
                            </label>
                        </div>
                    ))}
                    <h2 className="basket-total">Total: £{calculateTotal()}</h2>
                </div>
            )}
        </div>
    );
}

export default Basket;
