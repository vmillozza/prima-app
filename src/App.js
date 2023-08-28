//import logo from './logo.svg';
import './App.css';
// import Componente1 from './Componente1';
import Product from './Product.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         La nostra prima card
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Componente1/> */}
        <section className='card-section'></section>
        <Product></Product>
      </header>
      
    </div>
  );
}

export default App;
