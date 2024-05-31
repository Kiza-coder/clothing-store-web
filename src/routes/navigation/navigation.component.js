import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown  from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.css";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cart_open} = useContext(CartContext);
  

  

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
          
        </div>
            { cart_open ? 
            (<CartDropDown/>) : 
            (<Fragment></Fragment>)
            }

      </div>
      
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
