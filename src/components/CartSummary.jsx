import { useContext } from 'react'
import { BasketContext } from '../contexts/BasketContext'

const CartSummary = () => {
    const { basket, calculateTotal } = useContext(BasketContext);

    return (
        <div>{basket.length} item(s) in your basket: £{calculateTotal()}</div>
    )
};

export default CartSummary;
