 // import React from 'react'

// const CartContext = React.createContext({
//   cartList: [],
 
//   addCartItem: () => {},
//   removeCartItem: () => {},
 
// })

// export default CartContext

import React from "react";

const CartContainer=React.createContext({
  cartList:[],
  addcartItem:()=>{},
  removecartItem:()=>{},
})
export default CartContainer;