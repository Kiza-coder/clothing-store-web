import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItemCheckout from '../../components/cart-item-checkout/cart-item-checkout.component';



const Checkout = () => {

    const { cartItems, totalPrice } = useContext(CartContext);

  
  
    
    return(
        <div className="checkout-container">
           <div>Titles</div>
           <div>
           {cartItems.length ? (
          cartItems.map((item) => <CartItemCheckout key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
           </div>
           <div>
            Total : {totalPrice} $
           </div>
        </div>
    );
}

export default Checkout;