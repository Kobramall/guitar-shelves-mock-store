import React from "react";




const CartItems = (props) =>{
    const cart = props.cart
    
    console.log(cart)
   return( 
    cart.forEach(element => {
        <div>
        <img scr={element.img} alt="product"/>
        <p>{element.price}</p>
        </div>
     })
     )
}

export default CartItems