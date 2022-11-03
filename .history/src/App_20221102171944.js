import './App.css';
import Vd from './assets/GuitarSV.MP4'
import Img from './assets/guitarPhoto.jpg'
import Navbar from './componets/Navbar';
import Cart from './componets/Cart';
import {useState} from 'react'

function App() {
  const [ cartDisplayed, setCartDisplay] = useState(false)
  
  const toggleCartDisplay = () =>{
      cartDisplayed ? setCartDisplay(false) : setCartDisplay(true)
  }

  return (
    cartDisplayed ? <Cart toggleCartDisplay={toggleCartDisplay} cartDisplayed={cartDisplayed} setCartDisplay={setCartDisplay}/> :
    <div className="App">
        <Navbar toggleCartDisplay={toggleCartDisplay} cartDisplayed={cartDisplayed} setCartDisplay={setCartDisplay}/>
      <div className='Home'>
          <video src={Vd} autoPlay loop muted height="250" width="300"/>
      </div>
      <div className='About'>
         <img src={Img} alt="Guitar Product" height="130" width="120"/>
         <p>Custom Guitar Shelves is dedicated to bring you the best experience possible. Check out our Shelves to improve the look of your room today!</p>
      </div>
      <div className='Store'>
        <div className='picRow'>
        <img src={Img} alt="item one" height="60" width="50"/>
        <img src={Img} alt="item two"height="60" width="50" />
        <img src={Img} alt="item three" height="60" width="50"/>
        </div>
        <div className='itemName'>
           <p>Item1<span><button>add</button></span></p>
           <p>Item2<span><button>add</button></span></p>
           <p>Item3<span><button>add</button></span></p>
        </div>
      </div>
      <footer>
        <a href='kbramall11@gmail.com'>Email</a>
      </footer>
    </div>  
  );
}

export default App;
