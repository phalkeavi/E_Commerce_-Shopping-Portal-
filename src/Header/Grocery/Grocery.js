// src/Header/GroceryList/GroceryList.jsx
import React from 'react';
import './Grocery.css';

const groceries = [
  {
    name: "Fortune Sunflower Oil (1L)",
    image: "https://m.media-amazon.com/images/I/71wVU7pgwAL._UF894,1000_QL80_.jpg",
    brand: "Fortune",
    price: "₹145",
    description: "Healthy cooking oil with Vitamin E."
  },
  {
    name: "India Gate Basmati Rice (5kg)",
    image: "https://m.media-amazon.com/images/I/71CkhTT8-hL._UF894,1000_QL80_.jpg",
    brand: "India Gate",
    price: "₹565",
    description: "Premium long-grain aged rice."
  },
  {
    name: "Tata Salt (1kg)",
    image: "https://i0.wp.com/dmaxpro.in/wp-content/uploads/2023/08/tata-salt-1kg.png?fit=150%2C187&ssl=1",
    brand: "Tata",
    price: "₹22",
    description: "Vacuum evaporated iodized salt."
  },
  {
    name: "Aashirvaad Atta (5kg)",
    image: "https://m.media-amazon.com/images/I/91Lj2AJXfOL._UF1000,1000_QL80_.jpg",
    brand: "Aashirvaad",
    price: "₹260",
    description: "Whole wheat flour for soft chapatis."
  },
  {
    name: "Amul Butter (500g)",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/9/451987404/SE/WD/TP/119783533/amul-butter-500-g-carton-product-images-o490001392-p490001392-3-202203152128-500x500.webp",
    brand: "Amul",
    price: "₹245",
    description: "Delicious creamy butter, perfect for cooking."
  },
  {
    name: "Bru Instant Coffee (200g)",
    image: "https://m.media-amazon.com/images/I/61Jp1Huid5L.jpg",
    brand: "Bru",
    price: "₹145",
    description: "Strong & aromatic instant coffee."
  },
  {
    name: "Red Label Tea (1kg)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eOWwjPZE7d8UL5hI9PIyxNrb6yqmIKfsAg&s",
    brand: "Red Label",
    price: "₹490",
    description: "Rich taste & flavor-packed tea."
  },
  {
    name: "Kissan Mixed Fruit Jam (500g)",
    image: "https://m.media-amazon.com/images/I/61X2Ov+z7XL.jpg",
    brand: "Kissan",
    price: "₹120",
    description: "Tasty spread made with real fruits."
  }
];

function GroceryList() {
  return (
    <div className="grocery-container">
      {groceries.map((item, i) => (
        <div className="grocery-card" key={i}>
          <img src={item.image} alt={item.name} className="grocery-img" />
          <div className="grocery-info">
            <h3>{item.name}</h3>
            <p className="brand">{item.brand}</p>
            <p className="desc">{item.description}</p>
            <h4 className="price">{item.price}</h4>
            <button className="buy-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroceryList;
