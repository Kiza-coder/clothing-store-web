import {  createContext,useState     } from 'react';

export const CartContext = createContext({
    cart_products: [],
    cart_USER: null,
    cart_open: null,
  });

export const CartProvider = ({children}) => {

    const [cart_products, setCartProducts] = useState([]);
    const [cart_open, setCartOpen ] = useState(false);

    const value =  { cart_products, cart_open, setCartOpen  }
    return<CartContext.Provider value={value}>{children}</CartContext.Provider>
}
