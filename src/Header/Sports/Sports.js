// src/Header/SportsList/SportsList.jsx

import React from 'react';
import './Sports.css';

const sportsItems = [
  {
    name: "Cricket Bat",
    image: "https://shop.teamsg.in/cdn/shop/files/7_03d3a0f8-36e0-4101-87f3-949e2bd1c098.png?v=1745325714&width=1946",
    brand: "SG Scorer",
    price: "₹1,299",
    description: "Premium English Willow cricket bat for club-level play."
  },
  {
    name: "Football",
    image: "https://m.media-amazon.com/images/I/81g75eWa9nL.jpg",
    brand: "Nivia Storm",
    price: "₹699",
    description: "High-quality rubber football for outdoor and turf play."
  },
  {
    name: "Badminton Racket",
    image: "https://m.media-amazon.com/images/I/71M2417oGXL._UF894,1000_QL80_.jpg",
    brand: "Yonex GR 303",
    price: "₹999",
    description: "Lightweight racket perfect for beginners and intermediates."
  },
  {
    name: "Yoga Mat",
    image: "https://m.media-amazon.com/images/I/81feGML0NAL._UF894,1000_QL80_.jpg",
    brand: "Boldfit EVA",
    price: "₹499",
    description: "Anti-slip, thick yoga mat for home workouts and sessions."
  },
  {
    name: "Dumbbells",
    image: "https://m.media-amazon.com/images/I/81yi8OiYIRL._UF894,1000_QL80_.jpg",
    brand: "Kore PVC",
    price: "₹1,799",
    description: "Adjustable dumbbell set for strength and conditioning."
  },
  {
    name: "Tennis Ball Pack",
    image: "https://rukminim2.flixcart.com/image/704/844/kiow6fk0-0/ball/9/p/b/70-30-light-green-cricket-tennis-ball-pack-of-6-standard-6-na-original-imafyemv5zu6zxfg.jpeg?q=90&crop=false",
    brand: "Cosco",
    price: "₹399",
    description: "Pack of 6 durable pressurized tennis balls."
  }
];

function SportsList() {
  return (
    <div className="sports-container">
      {sportsItems.map((item, index) => (
        <div className="sports-card" key={index}>
          <img src={item.image} alt={item.name} className="sports-img" />
          <div className="sports-details">
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

export default SportsList;
