import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-item-checkout.styles.css';


const CartItemCheckout = ({ cartItem }) => {

  const { addItemToCart, removeItemToCart, removeItemFromCheckout } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(cartItem);
  const removeProductToCart = () => removeItemToCart(cartItem);
  const removeProductFromCheckout = () => removeItemFromCheckout(cartItem);


  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item-container'>

      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className='name'>{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={ removeProductToCart}>
        &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addProductToCart}>
        &#10095;
        </div>
      </span>

      <span className="price">{price}</span>

      <div className="remove-button" onClick={removeProductFromCheckout}>
      &#10005;
      </div>

    </div>
  );
};
export default CartItemCheckout;
