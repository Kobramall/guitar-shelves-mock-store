import React from "react";
import Img from '../assets/guitarPhoto.jpg'



const CartItems = (props) =>{  
  
  console.log(Img)
return (
        <div className="ItemsInCart">
         <img src={Img} alt="Guitar Product" height="60" width="50"/><span><p>{props.item.price}</p></span>
          <p>{props.item.name}</p>
        </div>
    )
}

export default CartItems