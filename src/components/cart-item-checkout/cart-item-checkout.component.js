import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartItemCheckout = ({ cartItem }) => {

const { addItemToCart, removeItemToCart, removeItemFromCheckout } = useContext(CartContext);

const addProductToCart = () =>  addItemToCart(cartItem);
const removeProductToCart = () =>  removeItemToCart(cartItem);
const removeProductFromCheckout = () => removeItemFromCheckout(cartItem);


  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div>
      <div>{imageUrl}</div>
      <div>{name}</div>
      <div>
        <div onClick={addProductToCart}> + </div>
        {quantity}
        <div onClick={removeProductToCart}> - </div>
      </div>
      <div>{price}</div>
      <div onClick={removeProductFromCheckout}>remove</div>
    </div>
  );
};
export default CartItemCheckout;
