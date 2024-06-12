import {  createContext, useState, useEffect     } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if(existingCartItem){
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity +1  } :
      cartItem
    );  
  }

  return [...cartItems, {...productToAdd, quantity: 1}];
    
}

export const removeCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if(existingCartItem && existingCartItem.quantity > 1){
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity -1  } :
      cartItem
    );  
  }
  return cartItems;
    
}

export const removeItemFromCheckoutList = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );
   if(existingCartItem){
    return cartItems.filter((cartItem) => 
      cartItem.id !== productToAdd.id 
    );  
  }
  return cartItems;
}


export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    cartCount: 0,
    totalPrice:0,
    removeItemFromCheckout: () => {},
  });

export const CartProvider = ({children}) => {

    const [cartOpen, setCartOpen ] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() =>{
      const newCartCount = cartItems.reduce((total,cartItem) => total + cartItem.quantity, 0);
      setCartCount(newCartCount);
      const newTotalPrice = cartItems.reduce((total,cartItem) => total + (cartItem.price * cartItem.quantity), 0);
      setTotalPrice(newTotalPrice);
    }, [cartItems])

   

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const removeItemToCart = (product) => {
      setCartItems(removeCartItem(cartItems, product))
    }

    const removeItemFromCheckout = (product) => {
      setCartItems(removeItemFromCheckoutList(cartItems,product))
    }

    

    const value =  {  cartOpen, setCartOpen, cartItems, addItemToCart, cartCount, removeItemToCart, totalPrice, removeItemFromCheckout  }
    return<CartContext.Provider value={value}>{children}</CartContext.Provider>
}
