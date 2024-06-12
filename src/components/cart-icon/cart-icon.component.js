import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.css';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {

    const { setCartOpen, cartOpen,cartCount } = useContext(CartContext);

    const toogleCart = () => {
        setCartOpen(!cartOpen)
    }

    return(
        <div className='cart-icon-container' onClick={toogleCart}>
            <ShoppingIcon className='"shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;