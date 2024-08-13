import React from 'react';
import './OurServices.css';

const services = [
  { id: 1, name: 'Safety Audit and Training', description: 'Comprehensive safety audits and training programs.' },
  { id: 2, name: 'Refilling Services', description: 'Professional refilling services for fire extinguishers.' },
  { id: 3, name: 'AMC Services', description: 'Annual maintenance contracts for fire safety equipment.' },
  { id: 4, name: 'Fire Extinguisher Installation', description: 'Expert installation of fire extinguishers and related equipment.' },
  { id: 5, name: 'Fire Safety Consultation', description: 'Expert advice and consultation on fire safety measures.' },
  { id: 6, name: 'Emergency Response Planning', description: 'Planning and training for effective emergency response.' },
  { id: 7, name: 'Fire Drill and Evacuation Training', description: 'Hands-on training for fire drills and evacuation procedures.' },
  { id: 8, name: 'Fire Safety Equipment Testing', description: 'Regular testing of fire safety equipment to ensure functionality.' },
];

function OurServices() {
  return (
    <div className="OurServices">
      <h1>Our Services</h1>
      <div className="service-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
