import React from 'react';
import './Home&kitchen.css'; // You will add this CSS below

const homeKitchenItems = [
  {
    title: "Prestige Induction Cooktop",
    image: "https://www.rasoishop.com/cdn/shop/products/8901365419440-1_426c1094-c863-4a67-8585-5f04f8182632.jpg?v=1614758236",
    price: 1899,
    originalPrice: 2499,
    features: ["2000-Watt", "Touch Panel", "Indian Menu Options"],
  },
  {
    title: "Philips Air Fryer",
    image: "https://m.media-amazon.com/images/I/31t0ZVP5LML.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_PIRIOFOURANDHALF-medium,BottomLeft,30,-20_ZA541,500,900,420,420,AmazonEmber,50,4,0,0_QL100_.jpg",
    price: 8999,
    originalPrice: 11999,
    features: ["Rapid Air Technology", "HD9216/43", "1.8 L Capacity"],
  },
  {
    title: "Milton Thermosteel Flask",
    image: "https://www.bbassets.com/media/uploads/p/xl/40130308_8-milton-flask-hot-cold-thermosteel-flip-silver.jpg",
    price: 749,
    originalPrice: 999,
    features: ["1L Capacity", "Keeps Hot & Cold", "Stainless Steel"],
  },
  {
    title: "Cello Plastic Storage Container Set",
    image: "https://m.media-amazon.com/images/I/61y6HIEdddL._UF894,1000_QL80_.jpg",
    price: 599,
    originalPrice: 799,
    features: ["18 Pieces", "Microwave Safe", "Airtight"],
  },
  {
    title: "Borosil Glass Mixing Bowl Set",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmpY8oD8q0igwurBY_WYm4xx7_cf3DY0rJQ&s",
    price: 899,
    originalPrice: 1299,
    features: ["Set of 3", "Oven Safe", "Clear Glass"],
  },
  {
    title: "Prestige Gas Stove 2 Burner",
    image: "https://m.media-amazon.com/images/I/510Wwb3chDL.jpg",
    price: 2399,
    originalPrice: 2999,
    features: ["ISI Certified", "Glass Top", "Manual Ignition"],
  },
  {
    title: "Wonderchef Mixer Grinder",
    image: "https://www.wonderchef.com/cdn/shop/files/6802517.jpg?v=1753274575",
    price: 3499,
    originalPrice: 4799,
    features: ["750 Watts", "3 Jars", "Copper Motor"],
  },
  {
    title: "Philips LED Emergency Bulb",
    image: "https://m.media-amazon.com/images/I/61WmkoakULL.jpg",
    price: 349,
    originalPrice: 599,
    features: ["Rechargeable", "9W", "Cool Day Light"],
  },
  
];

function HomeKitchenCard() {
  return (
    <div className="home-kitchen-container">
      {homeKitchenItems.map((item, i) => (
        <div key={i} className="home-kitchen-card">
          <img src={item.image} alt={item.title} className="product-img" />
          <div className="product-details">
            <h3>{item.title}</h3>
            <ul>
              {item.features.map((feat, j) => (
                <li key={j}>• {feat}</li>
              ))}
            </ul>
            <div className="product-price-rating">
              <h2>₹{item.price}</h2>
              <p className="strike">₹{item.originalPrice}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeKitchenCard;
