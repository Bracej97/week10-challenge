import React, { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from "@mui/material";

function Basket() {
    const { basket, updateQuantity, calculateTotal, deleteItem } = useContext(BasketContext);

    return (
        <div>
            <h1>Your basket</h1>
            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <div>
                    {basket.map((item) => (
                        <div key={item.id} className="basket-item">
                            <Paper elevation={12}>
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
                            <IconButton aria-label="delete" onClick={() => deleteItem(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                            </Paper>
                        </div>
                    ))}
                    <h2 className="basket-total">Total: £{calculateTotal()}</h2>
                </div>
            )}
        </div>
    );
}

export default Basket;
