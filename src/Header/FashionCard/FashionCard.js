// src/Header/FashionCard/FashionCard.jsx
import React from 'react';
import './FashionCard.css';

const fashionProducts = [
  {
    brand: "ZARA",
    image: "https://i.ebayimg.com/images/g/HRAAAOSwYnxlnHui/s-l1200.png",
    title: "ZARA Floral Summer Dress",
    features: ["Cotton Fabric", "Slim Fit", "Machine Wash"],
    rating: 4.6,
    reviews: 1342,
    price: 2499,
    originalPrice: 3299,
    offer: "24% off",
  },
  {
    brand: "H&M",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/MARCH/7/ImJkQLnV_587ba24a9e5049d3ae0102514c2643b7.jpg",
    title: "H&M Casual White Shirt",
    features: ["100% Cotton", "Regular Fit", "Hand Wash Recommended"],
    rating: 4.4,
    reviews: 812,
    price: 1499,
    originalPrice: 1999,
    offer: "25% off",
  },
  {
    brand: "Nike",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/516c42e6-256f-4491-8b14-28837dce32f2/AS+M+NK+DF+HD+PO+GFX.png",
    title: "Nike Sports Hoodie",
    features: ["Polyester Blend", "Warm Fit", "Dry-Fit Material"],
    rating: 4.7,
    reviews: 2154,
    price: 3599,
    originalPrice: 4499,
    offer: "20% off",
  },
  {
    brand: "Adidas",
    image: "https://assets.ajio.com/medias/sys_master/root/20240829/xeKM/66d05c3a6f60443f313c91c5/-473Wx593H-469662840-black-MODEL.jpg",
    title: "Adidas Men’s Joggers",
    features: ["Slim Fit", "Stretchable", "Breathable Fabric"],
    rating: 4.3,
    reviews: 973,
    price: 1899,
    originalPrice: 2399,
    offer: "21% off",
  },
  {
    brand: "Levi's",
    image: "https://m.media-amazon.com/images/I/51YvXaqjbWL._SX679_.jpg",
    title: "Levi's 511 Slim Jeans",
    features: ["Stretch Denim", "Slim Fit", "Classic 5-Pocket"],
    rating: 4.5,
    reviews: 1823,
    price: 2999,
    originalPrice: 3799,
    offer: "21% off",
  },
  {
    brand: "Puma",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSWxi6Qpfy0vWQcX3mnBqhmUa_Un4vOXVWKbbFFwZOv9zL0p4_iin9Jwt2PtrWmR2Vg1gY3y0xoprCUgz9B6CMrZtVOohD5dWhL1MBATeu4B-G3S7sJZ00JzA",
    title: "Puma Graphic T-Shirt",
    features: ["Cotton Blend", "Bold Print", "Unisex Design"],
    rating: 4.2,
    reviews: 624,
    price: 1099,
    originalPrice: 1399,
    offer: "22% off",
  },
  {
    brand: "Roadster",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR41LZvza40TeJUPFCAZPQeruYpf8Ag9ijKt_zYPCkbMdOSBVmEg7B7qlI3RqoRnWOhF1BlJsD-RrkgWlvnbODHE0sB9nSRq_7KHPzfyys",
    title: "Roadster Denim Jacket",
    features: ["Denim", "Casual Fit", "2 Front Pockets"],
    rating: 4.1,
    reviews: 432,
    price: 2299,
    originalPrice: 2899,
    offer: "20% off",
  },
  {
    brand: "Only",
    image: "https://m.media-amazon.com/images/I/81GHs6R4m-L._SY679_.jpg",
    title: "Only Women’s Casual Top",
    features: ["Chiffon", "V-Neck", "Lightweight"],
    rating: 4.3,
    reviews: 548,
    price: 1199,
    originalPrice: 1599,
    offer: "25% off",
  },
 
];

function FashionCard() {
  return (
    <div className="product-list">
      {fashionProducts.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-badge">{product.badge}</div>
          <img src={product.image} alt={product.title} className="product-img" />
          <div className="product-details">
            <h3>{product.title}</h3>
            <ul>
              {product.features.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <div className="product-price-rating">
              <span className="rating">⭐ {product.rating} ({product.reviews} reviews)</span>
              <h2>₹{product.price}</h2>
              <p className="strike">₹{product.originalPrice}</p>
              <p className="offer">{product.offer}</p>
            </div>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FashionCard;
