import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <button>Home</button>
      <button>About</button>
      <button>Store</button>
      <button>Contact</button>
      </header>
      <div className='Home'>
          <video src="d"/>
      </div>
      <div className='About'>
         <img src="nice"/>
         <p>I need shelves</p>
      </div>
      <div className='Store'>
        <div className='picRow'>
           <img/>
           <img/>
           <img/>
        </div>
        <div className='itemName'>
           <p>Item1</p>
           <p>Item2</p>
           <p>Item3</p>
        </div>
      </div>
      <footer>
        <a>Email</a>
      </footer>
    </div>
  );
}

export default App;
