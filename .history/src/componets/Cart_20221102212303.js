import React from "react";
import CartItems from "./CartItems";
import './Cart.css'


const Cart = (props) =>{
    
    const cart = props.cart
    return(
        <div className="cart">
        <h1>CART</h1>
        <CartItems cart={cart}/>
        <button onClick={props.toggleCartDisplay}>Return to home</button>
        </div>
    )
}

export default Cart
