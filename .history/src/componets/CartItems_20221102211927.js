import React from "react";




const CartItems = (props) =>{
    const cart = props.cart
    

    cart.forEach(element => {
        console.log(element)
        return(
        <div>
          <img scr={element.img} alt="product"/>
          <p>{element.price}</p>
          </div>
    )})
}

export default CartItems