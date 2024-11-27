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


function Home() {
    const { addToBasket } = useContext(BasketContext);

    return (
        <div>
            <div style={{ height: '60px' }} />
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
                {products.map((product) => (
                    <Card sx={{ maxWidth: 345, minWidth: 300, backgroundColor: '#444444'}} key={product.id}>
                        <CardContent>
                            <CardMedia sx={{ height: 230 }} image={`/${product.id}.jpg`}
                            />
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                                {product.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#ffffff' }}>
                                Price: £{product.price}
                            </Typography>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button size="small" variant="contained"><Link to={`/product/${product.id}`} style={{ color: '#FFF' }}>View product</Link></Button>
                            <IconButton sx={{ color:"#4dabf5" }} aria-label="add to shopping cart" onClick={() => addToBasket(product)}><AddShoppingCartIcon /></IconButton>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )
};

export default Home;
