import React from 'react';


const Product = (props) => {
  console.log(props);
  const pStyle = {
    textTransform:"uppercase",
  };
  const prezzo = "14,00";
  return (
    <div>
      <article>
        <div className='card'>
          <img src={props.img} alt="Prodotto Amazon"/>
          <h6>10 euro amazon + 20p</h6>
          <hr></hr>
          <p>{props.nome}</p>
          <p>{props.prezzo}</p>
          <p style={pStyle}>bamby000</p>
        </div>
        <p className='card-time'>{'RIAPRE PRESTO'.toLocaleLowerCase()}</p>
        <button>
            {prezzo} euro
        </button>
      </article>
    </div>
  );
}

export default Product;
