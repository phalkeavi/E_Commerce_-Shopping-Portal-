// src/Header/BeautyCareList/BeautyCareList.jsx

import React from 'react';
import './Beauty.css';

const beautyProducts = [
  {
    name: "Moisturizing Cream",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcAqEB3-6DCbtXOyZ0xbhj3HJ_BwGn1FjoA&s",
    brand: "NIVEA Soft",
    price: "₹249",
    description: "Light moisturizer for face and body with vitamin E and jojoba oil."
  },
  {
    name: "Face Wash",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzFMWf3o7_MWTRSQyn9G5LvHMhOMBXX3SuQ&s",
    brand: "Himalaya Neem",
    price: "₹179",
    description: "Gentle herbal face wash for clear, healthy skin."
  },
  {
    name: "Lip Balm",
    image: "https://m.media-amazon.com/images/I/61DKwH6bTKL._UF1000,1000_QL80_.jpg",
    brand: "Maybelline Baby Lips",
    price: "₹150",
    description: "Hydrating tinted lip balm with SPF protection."
  },
  {
    name: "Hair Serum",
    image: "https://r-mart.co.in/images/thumbs/0027608_livon-anti-frizz-serum-with-vitamin-e-20ml_510.jpeg",
    brand: "Livon",
    price: "₹299",
    description: "Frizz control hair serum with argan oil and vitamin E."
  },
  {
    name: "Sunscreen Lotion",
    image: "https://m.media-amazon.com/images/I/613AVpNtMZL._UF1000,1000_QL80_.jpg",
    brand: "Lakmé Sun Expert",
    price: "₹349",
    description: "SPF 50 sunscreen for UV protection & moisturized skin."
  }
];

function BeautyCareList() {
  return (
    <div className="beauty-container">
      {beautyProducts.map((item, index) => (
        <div className="beauty-card" key={index}>
          <img src={item.image} alt={item.name} className="beauty-img" />
          <div className="beauty-details">
            <h3>{item.name}</h3>
            <p className="brand">{item.brand}</p>
            <p className="desc">{item.description}</p>
            <h4 className="price">{item.price}</h4>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BeautyCareList;
