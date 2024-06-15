import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItemCheckout from '../../components/cart-item-checkout/cart-item-checkout.component';
import './checkout.styles.css';




const Checkout = () => {

  const { cartItems, totalPrice } = useContext(CartContext);




  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      <div>
        {cartItems.length ? (
          cartItems.map((item) => <CartItemCheckout key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <div className='total'>
        Total : {totalPrice} $
      </div>
    </div>
  );
};

export default Checkout;