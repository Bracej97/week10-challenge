import React from "react";
import { BasketContext } from "../contexts/BasketContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { products } from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, CardMedia, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { SearchContext } from "../contexts/SearchContext";


function Home() {
    // Unpack the basket and search contexts
    const { addToBasket } = useContext(BasketContext);
    const { search, query } = useContext(SearchContext);

    // Returning the main content of the home page
    // A ternary operator is for if the search function returns no items
    // Map function to map through the products and create a bard component from MUI for each item
    // For each item there is the ability to view the detail products or add an item to the basket
    return (
        <div>
            <div style={{ height: '60px' }} />
            {query.length > 0 && search(products).length === 0 ?(
                        <h1>No products match your search.</h1>
                    ) : (
            <div style={{
                width: '100%',
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                alignSelf: 'stretch',
                gap: '10px',
             }}>
                {search(products).map((product) => (
                    <Card sx={{ maxWidth: 345, minWidth: 300, backgroundColor: '#444444'}} key={product.id}>
                        <CardContent>
                            <CardMedia sx={{ height: 230, marginBottom: '5px' }} image={`/${product.id}.jpg`}
                            />
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                                {product.name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#ffffff' }}>
                                £{product.price}
                            </Typography>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button size="small" variant="contained"><Link to={`/product/${product.id}`} style={{ color: '#222222' }}>View product</Link></Button>
                            <IconButton sx={{ color:"#4dabf5" }} aria-label="add to shopping cart" onClick={() => addToBasket(product)}><AddShoppingCartIcon /></IconButton>
                        </CardActions>
                    </Card>
                ))}
            </div>)}
        </div>
    )
};

export default Home;
