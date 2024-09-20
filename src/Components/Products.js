import React from 'react';
import './Products.css';

const products = [
  { id: 1, name: 'Fire Extinguisher A', description: 'High-quality fire extinguisher.', img: 'fire_extinguiser.jpg' },
  { id: 2, name: 'Fire Hydrant System', description: 'Durable and reliable fire extinguisher.', img: 'fire_hydrant.jpg' },
  { id: 3, name: 'Agni Fire Ball', description: 'Efficient fire hydrant item.', img: 'AgniFireBall.jpg' },
  { id: 4, name: 'Safety PPT Equipment', description: 'High-performance fire hydrant item.', img: 'SafetyPPT.jpg' },
  { id: 5, name: 'Troley Mount Fire Extinguiser', description: 'Portable fire extinguisher.', img: 'TroleyMount.jpg' },
  { id: 6, name: 'Agni Addressable Panel', description: 'Compact and effective Panel.', img: 'AgniPanel.jpg' },
  { id: 7, name: 'Agni MCP', description: 'Reliable fire hydrant accessory.', img: 'AgniMCP.jpg' },
  { id: 8, name: 'Fire Alarm System', description: 'Durable fire hydrant accessory.', img: 'FireAlarm.jpg' },
];

function Products() {
  return (
    <div className="Products">

      <h1 className='productHeading'>At <span>AgniFire Product Services </span>, we understand that when it comes to fire safety, there is no room for compromise.
       That’s why we offer a range of cutting-edge fire service products designed to meet the highest industry standards. 
       From advanced fire suppression systems to top-tier personal protective equipment, our solutions are built for durability,
        reliability, and performance.</h1>
        <h2>
      Explore Our <span>40+</span> Fire Protection Products and choose what you need most.
      </h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={require(`./${product.img}`)} alt={product.name} className="product-image" />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
