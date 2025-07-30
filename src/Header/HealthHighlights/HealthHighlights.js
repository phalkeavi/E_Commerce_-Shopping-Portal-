import React from 'react';
import './HealthHighlights.css';
import Vitamin from './Protein.jpg';
import Vegetables from './Vegetable.jpg';
import Health from './Health.jpg';
import Farm from './Farm.jpg';
import Help from './Help.jpg';

function HealthHighlights() {
    const BoxHealth = [
        {
            title: "Vitamins & Proteins",
            href:"https://www.muscleblaze.com/categories/pre-post-workout?navKey=CL-1709&itracker=w:home|products|;",
            image: Vitamin,
        },
        {
            title: "Vegetables & Fruits",
            href:"https://www.kisankonnect.in/product-listing/Vegetables?product-cat-id=2",
            image: Vegetables,
        },
        {
            title: "Health Appointments",
            href:"https://www.practo.com/consult?utm_source=consumer-home&utm_medium=web&utm_campaign=top_symptoms",
            image: Health,
        },
        {
            title:"Farm Fertlizers",
            href:"https://agribegri.com/organic-farming/organic-fertilizer-buy-online.php",
            image:Farm,
        },
        {
            title: "Help & Support",
            href:"https://chatgpt.com/?model=auto",
            image: Help,
        }
    ];

    return (
        <div className="health-container">
            {BoxHealth.map((box, index) => (
                <div className="health-box" key={index}>
                    <a href={box.href} >
                    <img src={box.image} alt={box.title} className="health-image" />
                    <h3 className="health-title">{box.title}</h3>
                </a>
                </div>
            ))}
        </div>
    );
}

export default HealthHighlights;