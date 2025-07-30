import React from 'react';
import './BookList.css';

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
    price: 449,
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones."
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
    price: 399,
    description: "Timeless lessons on wealth, greed, and happiness."
  },
  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    image: "https://gyaanstore.com/cdn/shop/files/234_aaa800ec-5535-4c1e-856a-e003ddf332e5.png?v=1701690414",
    price: 299,
    description: "The Japanese secret to a long and happy life."
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    price: 325,
    description: "What the rich teach their kids about money – that the poor do not!"
  },
  {
    title: "Do It Today",
    author: "Darius Foroux",
    image: "https://m.media-amazon.com/images/I/61jCkOVf1oL.jpg",
    price: 199,
    description: "Stop procrastinating and achieve your goals."
  }
];

function BookList() {
  return (
    <div className="book-container">
      {books.map((book, i) => (
        <div key={i} className="book-card">
          <img src={book.image} alt={book.title} className="book-img" />
          <div className="book-details">
            <h3>{book.title}</h3>
            <p className="author">by {book.author}</p>
            <p className="desc">{book.description}</p>
            <h4>₹{book.price}</h4>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
