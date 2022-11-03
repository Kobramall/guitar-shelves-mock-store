import React from "react";




const CartItems = (props) =>{  

    props.cart.forEach(element => {
        return(
        <div>
          <img scr={element.img} alt="product"/>
          <p>{element.price}</p>
          </div>
    )})
}

export default CartItems