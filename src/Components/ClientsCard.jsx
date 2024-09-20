import React from 'react';
import './Client_card.css';
const ClientCard = ({ client }) => {
  return (
    <div className="client-card">
      <img src={client.logo} alt={`logo`} className="client-logo" />
    </div>
  );
};

export default ClientCard;
