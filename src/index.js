import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Sliderscomponent from './Header/Sliderscomponent/Sliderscomponent';
import Slogan from './Header/Slogan/Slogan';
import HealthHighlights from './Header/HealthHighlights/HealthHighlights';
import CategoryNav from './Header/CategoryNav/CategoryNav';
import Footer from './Footer/Footer';
import Login from './Header/Login/Login';
import ProductCard from './Header/ProductCard/ProductCard';
import FashionCard from './Header/FashionCard/FashionCard';
import HomeKitchen from './Header/Home&Kitchen/Home&Kitchen';
import BookList from './Header/BookList/BookList';
import Sports from './Header/Sports/Sports';
import Beauty from './Header/Beauty/Beauty';
import Toys from './Header/Toys/Toys';
import Grocery from './Header/Grocery/Grocery';
import Health from './Header/Health/Health';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  return (
    <>
      <Header />
      <Slogan />
      <CategoryNav />
      <Sliderscomponent />
      <HealthHighlights />
      <Footer />
      
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product-card" element={<ProductCard />} />
      <Route path="/fashion" element={<FashionCard />} />
      <Route path="/Home & Kitchen" element={<HomeKitchen />} />
      <Route path="/booklist" element={<BookList />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/toys" element={<Toys />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/health" element={<Health />} />


    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
