import React from 'react';

// Utilizza le props come oggetto invece di argument singoli
const Product = ({ img, nome, prezzo, children }) => {
    console.log(img, nome, prezzo, children);
    const pStyle = {
        textTransform: "uppercase",
    };
    return (
        <article>
            <div className='card'>
                <img src={img} alt="Prodotto Amazon" />
                <h6>{nome}</h6>
                <hr />
                <p>{prezzo}</p>
                <p style={pStyle}>bamby000</p>
                <p>{children}</p>
            </div>
            <p className='card-time'>{'RIAPRE PRESTO'.toLocaleLowerCase()}</p>
            <button>
                {prezzo} euro
            </button>
        </article>
    );
}

export default Product;
