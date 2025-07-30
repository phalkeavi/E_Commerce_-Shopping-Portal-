// src/Header/CategoryNav/CategoryNav.jsx
import React from 'react';
import './CategoryNav.css';
import Minutes from './Minutesimg.jpg';
import Electronics from './Electronicsimg.jpg';
import Fashion from './fashionimg.jpg';
import Home from './kitchenimg.jpg';
import Books from './booksimg.jpg';
import Sports from './sportsimg.jpg';
import Beauty from './beautyimg.jpg';
import Toys from './toys img.jpg';
import Grocery from './groceryimg.jpg';
import Health from './healthimg.jpg';

import { Link } from 'react-router-dom';

function CategoryNav({ onChange, value }) {
  const categories = [
    { label: "Price-Drop", image: Minutes, to: "/product-card" },  // Link this to ProductCard
    { label: "Electronics", image: Electronics, to: "/product-card" },
    { label: "Fashion", image: Fashion , to: "/fashion" }, // Link this to FashionCard
    { label: "Home & Kitchen", image: Home, to: "/home & kitchen" },
    { label: "Books", image: Books, to: "/booklist"},
    { label: "Sports", image: Sports , to: "/sports"},
    { label: "Beauty & Personal Care", image: Beauty, to: "/beauty" },
    { label: "Games", image: Toys , to: "/toys"},
    { label: "Grocery", image: Grocery, to: "/grocery" },
    { label: "Health & Household", image: Health , to: "/health"},
  ];

  return (
    <div className="category-nav">
      {categories.map((category, index) =>
        category.to ? (
          <Link
            to={category.to}
            key={index}
            className={`category-item ${value === category.label ? 'active' : ''}`}
            onClick={() => onChange && onChange(category.label)}
          >
            <img src={category.image} alt={category.label} className="category-image" />
            <span className="category-label">{category.label}</span>
          </Link>
        ) : (
          <div
            key={index}
            className={`category-item ${value === category.label ? 'active' : ''}`}
            onClick={() => onChange && onChange(category.label)}
          >
            <img src={category.image} alt={category.label} className="category-image" />
            <span className="category-label">{category.label}</span>
          </div>
        )
      )}
    </div>
  );
}

export default CategoryNav;
