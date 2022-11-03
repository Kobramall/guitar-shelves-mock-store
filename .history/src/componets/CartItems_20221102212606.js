import React from "react";




const CartItems = (props) =>{  
  
return props.cart.forEach(element => {
        <div className="ItemsInCart">
          <img scr={element.img} alt="product"/>
          <p>{element.price}</p>
        </div>
    })
}

export default CartItems