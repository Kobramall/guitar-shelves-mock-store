import React, {useState} from "react"
import './Navbar.css'


export default function Navbar(props){
    const [fix, setFix] = useState(false)

    function setFixedNavbar(){
        if(window.scrollY >= 1) {
            setFix(true)
        }else{
            setFix(false)
        }
    }
       
      window.addEventListener("scroll", setFixedNavbar)
    return(
        <header className={fix ? "navbar active" : 'navbar'}>
        <a href="/"><button>Home</button></a>
         <button>About</button>
         <button>Store</button>
         <button>Contact</button>
         <button onClick={props.toggleCartDisplay}>Cart</button>
      </header>
    )
}