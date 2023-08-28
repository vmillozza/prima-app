//import logo from './logo.svg';
import './App.css';
// import Componente1 from './Componente1';
import Product from './Product.js'

function App() {
  const primaCard = {

    nome:"10 euro amazon",
    img : "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b13905_1.jpg",
    prezzo:2.16,
}
const secondaCard = {

    nome:"Macherine 50 pz",
    img : "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b17009_1.jpg",
    prezzo:8,
}
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
        <Product nome={primaCard.nome} prezzo={primaCard.prezzo} img={primaCard.img}></Product>
        <Product nome={secondaCard.nome} prezzo={secondaCard.prezzo} img={secondaCard.img}></Product>
        
      </header>
      
    </div>
  );
}

export default App;
