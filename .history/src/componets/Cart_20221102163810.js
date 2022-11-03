import React from "react";


const Cart = (props) =>{
    return(
        <div className="cart">
        <h1>CART</h1>
        <button onClick={props.toggleCartDisplay}>Return to home</button>
        </div>
    )
}

export default Cart
