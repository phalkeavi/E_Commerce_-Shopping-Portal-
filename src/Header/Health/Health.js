// src/Header/HealthProducts/HealthProducts.jsx
import React from 'react';
import './Health.css';

const healthItems = [
  {
    name: "Zincovit Multivitamin Syrup (200ml)",
    image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/36f15e5c358d4abda51a8b0757704d64.jpg",
    type: "Syrup",
    price: "₹120",
    benefits: "Boosts immunity & energy levels"
  },
  {
    name: "Revital H Daily Health Supplement (60 Caps)",
    image: "https://m.media-amazon.com/images/I/81LLWVgsa7L._UF350,350_QL80_.jpg",
    type: "Capsules",
    price: "₹425",
    benefits: "Improves stamina and reduces fatigue"
  },
  {
    name: "Ensure Nutritional Protein Powder (400g)",
    image: "https://m.media-amazon.com/images/I/71z9ohvqIDL.jpg",
    type: "Protein Powder",
    price: "₹625",
    benefits: "Complete balanced nutrition for adults"
  },
  {
    name: "Liv52 DS Syrup (100ml)",
    image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/w40jshxjuct5uhahyt2k.jpg",
    type: "Syrup",
    price: "₹140",
    benefits: "Supports liver health and digestion"
  },
  {
    name: "Horlicks Protein+ (400g)",
    image: "https://m.media-amazon.com/images/I/51AxKdqOKOL.jpg",
    type: "Protein Drink",
    price: "₹595",
    benefits: "High protein for muscle strength"
  },
  
];

function HealthProducts() {
  return (
    <div className="health-container">
      <h2 className="section-title">Health & Wellness Essentials</h2>
      <div className="health-grid">
        {healthItems.map((item, i) => (
          <div className="health-card" key={i}>
            <img src={item.image} alt={item.name} className="health-img" />
            <div className="health-info">
              <h3>{item.name}</h3>
              <p className="type">{item.type}</p>
              <p className="benefits">{item.benefits}</p>
              <h4 className="price">{item.price}</h4>
              <button className="health-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthProducts;
