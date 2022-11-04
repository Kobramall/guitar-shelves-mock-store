import React from "react";
import CartItems from "./CartItems";
import './Cart.css'
import Img from '../assets/guitarPhoto.jpg'


const Cart = (props) =>{
    
 
    return(
        <div className="cart">
        <h1>CART</h1>
         {props.cart.length > 0 ? props.cart.map(item =>(
            <CartItems key={item.id} item={item}/>
        )) : <h2>Your Cart Is Empty</h2>}
        
        <button onClick={props.toggleCartDisplay}>Return to home</button>
        </div>
    )
}

export default Cart
