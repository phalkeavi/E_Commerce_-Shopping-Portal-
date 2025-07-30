import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Sliderscomponent.css';
import Slide1 from './image copy 6.png';
import Slide2 from './slide3Laptop.jpg';
import Slide3 from './image copy 4.png';
import Slide4 from './image copy 3.png';
import Login from '../Login/Login';

function Sliderscomponent() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, // ✅ fixed spelling
  };

  const Sliderimages = [
    {
      src: Slide4,
      href: {Login},
      alt: 'Sale! Sale! Sale!',
    },
    {
      src: Slide2,
      href: "https://www.bing.com/shop/productpage?q=zenbook+15+lapop&filters=scenario%3a%2217%22+gType%3a%2212%22+gId%3a%22272141599584%22+gIdHash%3a%220%22+gGlobalOfferIds%3a%22272141599584%22+AucContextGuid%3a%220%22+GroupEntityId%3a%22272141599584%22+NonSponsoredOffer%3a%22True%22&productpage=true&FORM=SHPPDP&browse=true", // replace with actual link
      alt: 'Laptop',
    },
    {
      src: Slide1,
      href: {Login}, // replace with actual link
      alt: 'Adenture',
    },
    {
      src: Slide3,
      href: {Login}, // replace with actual link
      alt: 'Jewellery',
    },
  ];

  return (
    <div className="slider-container">
      {/* Custom Arrows */}
      <button className="custom-arrow left" onClick={() => sliderRef.current.slickPrev()}>
        ❮
      </button>
      <button className="custom-arrow right" onClick={() => sliderRef.current.slickNext()}>
        ❯
      </button>

      <Slider ref={sliderRef} {...settings}>
        {Sliderimages.map((image, index) => (
          <div key={index} className="Slider-item">
            <a href={image.href} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={image.alt} className="slider-image" />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliderscomponent;
