import React from "react";
import { BasketContext } from "../contexts/BasketContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { products } from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, CardMedia, Typography } from "@mui/material";


function Home() {
    const { addToBasket } = useContext(BasketContext);

    return (
        <div>
            <h1>Products</h1>
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
                    <Card sx={{ maxWidth: 345 }} key={product.id}>
                        <CardContent>
                            <CardMedia sx={{ height: 230 }} image={`../../public/${product.id}.jpg`}
                            />
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text-secondary' }}>
                                Price: £{product.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to={`/product/${product.id}`}>View product</Link></Button>
                            <Button size="small" onClick={() => addToBasket(product)}>Add to basket</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )
};

export default Home;
