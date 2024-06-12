import { useContext } from "react";
import "./cart-dropdown.styles.css";
import CardItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

import Button from "../button/button.component";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CardItem cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <Button>CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
