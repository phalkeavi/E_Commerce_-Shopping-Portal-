// src/Header/ToysList/ToysList.jsx
import React from 'react';
import './Toys.css';

const toyProducts = [
  {
    name: "LEGO Classic Bricks",
    image: "https://manojstores.com/wp-content/uploads/2023/03/59.jpg",
    brand: "LEGO",
    price: "₹1,599",
    description: "Creative brick box for endless building fun, ages 4+."
  },
  {
    name: "Hot Wheels Track Set",
    image: "https://m.media-amazon.com/images/I/71jpmfF9zDL._UF1000,1000_QL80_.jpg",
    brand: "Hot Wheels",
    price: "₹899",
    description: "Exciting loops & launchers for kids aged 5+."
  },
  {
    name: "Remote Control Car",
    image: "https://m.media-amazon.com/images/I/812R2A45TsL._UF1000,1000_QL80_.jpg",
    brand: "SuperSpeed",
    price: "₹1,299",
    description: "4-wheel drive RC car with turbo speed mode."
  },
  {
    name: "Barbie Fashion Doll",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0-KYfW_6KhGuu8BUwrkLZFFGtI4SzdSU4A&s",
    brand: "Barbie",
    price: "₹999",
    description: "Stylish doll with accessories for imaginative play."
  },
  {
    name: "Magnetic Building Blocks",
    image: "https://m.media-amazon.com/images/I/813VONbqDPL._UF1000,1000_QL80_.jpg",
    brand: "MagMaster",
    price: "₹1,449",
    description: "STEM toy with colorful magnetic tiles for ages 3+."
  },
  {
    name: "Talking Tom Plush Toy",
    image: "https://m.media-amazon.com/images/I/91Amw6DoOKL._UF1000,1000_QL80_.jpg",
    brand: "FunZone",
    price: "₹499",
    description: "Interactive plush that repeats what you say!"
  }
];

function ToysList() {
  return (
    <div className="toys-container">
      {toyProducts.map((toy, index) => (
        <div className="toy-card" key={index}>
          <img src={toy.image} alt={toy.name} className="toy-img" />
          <div className="toy-info">
            <h3>{toy.name}</h3>
            <p className="toy-brand">{toy.brand}</p>
            <p className="toy-desc">{toy.description}</p>
            <h4 className="toy-price">{toy.price}</h4>
            <button className="toy-btn">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToysList;
