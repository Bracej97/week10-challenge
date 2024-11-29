import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BasketContext } from "../contexts/BasketContext";
import { products } from "../data";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, CardMedia, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Product() {
    // Unpack the basket context
    const { addToBasket } = useContext(BasketContext);
    // pull the specific product from the product array with the passed id
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id))

    if (!product) return <p>Product not found.</p>

    // Return a card for the specific product with an image, details of the product, the price and an add to basket button
    return (
        <div className="product-card" >
            <div style={{ height: '60px' }} />
            <Card sx={{ maxWidth: 500, minWidth: 300, backgroundColor: '#444444'}} key={product.id}>
                        <CardContent>
                            <CardMedia sx={{ height: 300, marginBottom: "5px" }} image={`/${product.id}.jpg`}
                            />
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                                {product.name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#ffffff' }} gutterBottom>
                                {product.description}
                            </Typography>

                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button size="small" variant="contained" aria-label="add to shopping cart" onClick={() => addToBasket(product)}>
                                <Typography variant="h5" sx={{ color: '#222222', whiteSpace: 'pre-line', marginRight: '10px' }}>
                                    £{product.price}
                                </Typography>
                                <AddShoppingCartIcon />
                            </Button>
                        </CardActions>
                    </Card>
        </div>
    );
}

export default Product;
