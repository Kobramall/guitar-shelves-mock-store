import React from "react";
import CartItems from "./CartItems";
import './Cart.css'


const Cart = (props) =>{
    
 
    return(
        <div className="cart">
        <h1>CART</h1>
        {props.cart.map(item =>(
            <CartItems key={item.id} item={item}/>
        ))}
        
        <button onClick={props.toggleCartDisplay}>Return to home</button>
        </div>
    )
}

export default Cart
