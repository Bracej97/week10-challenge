import React, { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Paper } from "@mui/material";
import { SearchContext } from "../contexts/SearchContext";

function Basket() {
    // Unpack the contexts for basket and search
    const { basket, updateQuantity, calculateTotal, deleteItem, setBasket } = useContext(BasketContext);
    const { search, query } = useContext(SearchContext);

    // Returning the main content of the basket page
    // First there is a ternary operator to display a message if the basket is empty or the items of the basket if there is anything
    // A second ternary operator is for if the search function returns no items
    // Map function to map through the basket and create a paper component from MUI for each item in the basket
    // For each item there is the ability to change the quantity of the items present or delete an item entirely from the basket
    return (
        <div>
            <h1>Your basket</h1>
            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <div>
                    {query.length > 0 && search(basket).length === 0 ?(
                        <h3>No products match your search.</h3>
                    ) : (
                    search(basket).map((item) => (
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
                    )
                    ))}
                    <Button size="small" variant="contained" color="error" onClick={() => setBasket([])} sx={{marginTop: '10px'}} style={{ color: '#ffffff' }}>Empty your basket</Button>
                    <h2 className="basket-total">Total: £{calculateTotal()}</h2>
                </div>
            )}
        </div>
    );
}

export default Basket;
