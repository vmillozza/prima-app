import React from 'react';

const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b13905_1.jpg";
const prezzo = "14,00 ";
const Product = () => {
  return (
    <div>
      <article>
        <div className='card'>
          <img src={img} alt="Prodotto Amazon"/>
          <h6>10 euro amazon + 20p</h6>
          <hr></hr>
          <p>2,16 euro</p>
          
        </div>
        <p className='card-time'>RIAPRE PRESTO</p>
        <button>
            {prezzo} euro
        </button>
      </article>
    </div>
  );
}

export default Product;
