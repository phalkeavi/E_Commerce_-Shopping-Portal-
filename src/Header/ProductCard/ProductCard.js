import React from 'react';
import './ProductCard.css';

// Sample 10 product objects
const products = [
  {
    badge: "Bestseller",
    image: "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge-60-fusion-1.jpg",
    title: "MOTOROLA Edge 60 Fusion 5G (256 GB)",
    features: [
      "8 GB RAM | 256 GB ROM | Expandable Upto 1 TB",
      "6.67 inch Display", "50MP + 13MP | 32MP Front Camera",
      "5500 mAh Battery", "Dimensity 7400 Processor",
      "68W Charger", "1 Year Warranty"
    ],
    rating: 4.5, reviews: 2337,
    price: 22999, originalPrice: 25999,
    offer: "11% off + Upto ₹16,600 Off on Exchange",
  },
  {
    badge: "Top Rated",
    image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/310717_0_cxfolr.png?tr=w-480",
    title: "Apple iPhone 14 (128 GB)",
    features: [
      "128 GB ROM", "6.1 inch Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip", "1 Year Warranty"
    ],
    rating: 4.7, reviews: 1892,
    price: 67999, originalPrice: 79999,
    offer: "15% off + ₹10,000 Off on HDFC Cards",
  },
  {
    badge: "Trending",
    image: "https://m.media-amazon.com/images/I/71goZuIha-L._SL1500_.jpg",
    title: "Samsung Galaxy S23 Ultra 5G (256 GB)",
    features: [
      "12 GB RAM | 256 GB ROM", "6.8 inch QHD+ AMOLED Display",
      "200MP + 12MP + 10MP | 12MP Front Camera",
      "5000 mAh Battery", "Snapdragon 8 Gen 2 Processor"
    ],
    rating: 4.8, reviews: 3200,
    price: 99999, originalPrice: 124999,
    offer: "20% Off + ₹15,000 Exchange Bonus",
  },
  // Add 7 more mobile objects below (for brevity, using same structure)
  {
    badge: "Hot Deal",
    image: "https://m.media-amazon.com/images/I/41KIE5+fbXL._SY300_SX300_QL70_FMwebp_.jpg",
    title: "Realme Narzo 60x 5G (128 GB)",
    features: ["6 GB RAM", "6.72 inch Display", "64MP Camera", "5000mAh Battery"],
    rating: 4.3, reviews: 870,
    price: 12999, originalPrice: 14999,
    offer: "13% off + Free Earbuds",
  },
  {
    badge: "Limited Offer",
    image: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1695352073864/2678cc7ea36b6dfe43806c0dd32a0003.png",
    title: "Vivo T2 Pro 5G (128 GB)",
    features: ["8 GB RAM", "6.38 inch Display", "64MP Camera", "66W FlashCharge"],
    rating: 4.4, reviews: 650,
    price: 17999, originalPrice: 20999,
    offer: "14% off + ₹1,000 Cashback",
  },
  {
    badge: "Editor’s Choice",
    image: "https://oasis.opstatics.com/content/dam/oasis/page/2023/in/product/11r/11r-red.png",
    title: "OnePlus 11R 5G (256 GB)",
    features: ["16 GB RAM", "6.74 inch Display", "50MP Camera", "Snapdragon 8+ Gen 1"],
    rating: 4.6, reviews: 2450,
    price: 39999, originalPrice: 44999,
    offer: "11% off + No Cost EMI",
  },
  {
    badge: "New Launch",
    image: "https://assets.sangeethamobiles.com/product_img/MTIxNTk=/1688645468_k9F.jpg",
    title: "Redmi Note 12 Pro 5G (128 GB)",
    features: ["6 GB RAM", "6.67 inch AMOLED Display", "50MP Camera", "67W Fast Charging"],
    rating: 4.2, reviews: 1500,
    price: 18999, originalPrice: 22999,
    offer: "17% off + ₹2,000 Exchange",
  },
  {
    badge: "Great Value",
    image: "https://cdn1.smartprix.com/rx-iy75wL7eI-w280-h280/iqoo-z7-5g.webp",
    title: "iQOO Z7 5G (128 GB)",
    features: ["6 GB RAM", "6.38 inch AMOLED", "64MP OIS Camera", "Dimensity 920"],
    rating: 4.3, reviews: 980,
    price: 14999, originalPrice: 16999,
    offer: "12% off + 3 Months Spotify Free",
  },
  {
    badge: "Smart Choice",
    image: "https://5.imimg.com/data5/ECOM/Default/2024/1/374143896/IP/RU/ET/47699750/s-l1600-c4f0a59c-de78-48ed-8ed9-0f5acafc5c51.jpg",
    title: "POCO X5 Pro 5G (128 GB)",
    features: ["8 GB RAM", "6.67 inch Display", "108MP Camera", "Snapdragon 778G"],
    rating: 4.4, reviews: 1230,
    price: 17999, originalPrice: 21999,
    offer: "18% off + ₹1,500 Off with Bank Offer",
  },
  {
    badge: "Budget King",
    image: "https://i0.wp.com/momentgroupofcompany.com/wp-content/uploads/2023/10/8118.jpg?fit=590%2C450&ssl=1",
    title: "Infinix Zero 5G 2023 (128 GB)",
    features: ["8 GB RAM", "6.78 inch Display", "50MP Triple Camera", "Dimensity 920"],
    rating: 4.1, reviews: 740,
    price: 12999, originalPrice: 15999,
    offer: "19% off + 6 Months Free Screen Replacement",
  }
];
function ProductCard() {
  return (
    <div className="product-list">
      {products.map((product, index) => (
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

export default ProductCard;
