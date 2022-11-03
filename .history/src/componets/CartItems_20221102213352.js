import React from "react";




const CartItems = (props) =>{  
  
return (
        <div className="ItemsInCart">
          <img scr={props.item.img} alt="product"/>
          <p>{props.item.price}</p>
        </div>
    )
}

export default CartItems