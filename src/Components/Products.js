import React from 'react';
import './Products.css';

const products = [
  { id: 1, name: 'Fire Extinguisher A', description: 'High-quality fire extinguisher.', img: 'logo.png' },
  { id: 2, name: 'Fire Extinguisher B', description: 'Durable and reliable fire extinguisher.', img: 'logo.png' },
  { id: 3, name: 'Fire Hydrant Item A', description: 'Efficient fire hydrant item.', img: 'logo.png' },
  { id: 4, name: 'Fire Hydrant Item B', description: 'High-performance fire hydrant item.', img: 'logo.png' },
  { id: 5, name: 'Fire Extinguisher C', description: 'Portable fire extinguisher.', img: 'logo.png' },
  { id: 6, name: 'Fire Extinguisher D', description: 'Compact and effective fire extinguisher.', img: 'logo.png' },
  { id: 7, name: 'Fire Hydrant Accessory A', description: 'Reliable fire hydrant accessory.', img: 'logo.png' },
  { id: 8, name: 'Fire Hydrant Accessory B', description: 'Durable fire hydrant accessory.', img: 'logo.png' },
];

function Products() {
  return (
    <div className="Products">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={require(`./${product.img}`)} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
