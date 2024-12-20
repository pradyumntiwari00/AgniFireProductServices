import React from 'react';
import ClientCard from './ClientsCard';
import './Client_card.css';

const clients = [
  {
    name: 'Client Two',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-egFat6S7KDBI_5jl9EotIhqFs5kz2oQYw&s' // Replace with actual image
  },
  {
    name: 'Client Three',
    logo: 'data:image/jpeg;base64,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' // Replace with actual image
  },
  {
    name: 'Client four',
    logo: 'https://ioagpl.com/wp-content/uploads/2021/10/IOAG-logo-1.png' // Replace with actual image
  },
  {
    name: 'Client five',
    logo: 'https://bmjh.org/be94617e27ceea79e099.png' // Replace with actual image
  },
  {
    name: 'Client six',
    logo: 'https://www.kalyanjewellers.net/images/kalyan_logo.svg' // Replace with actual image
  },
  {
    name: 'Client seven',
    logo: 'https://img1.wsimg.com/isteam/ip/90d684ef-0619-481d-ac7e-ffeed96de5b0/blob-59bc18a.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:95' // Replace with actual image
  },
  {
    name: 'Client eight',
    logo: 'https://www.oswalvalves.com/assets/images/logo/logo-light.png' // Replace with actual image
  },
  {
    name: 'Client 9',
    logo: 'https://seeklogo.com/images/R/Radisson-logo-119D2A552A-seeklogo.com.png' // Replace with actual image
  },
  {
    name: 'Client 10',
    logo: 'https://www.ramco.com/hs-fs/hubfs/website-assets/ramco-logo.png?width=195&height=42&name=ramco-logo.png' // Replace with actual image
  },
  {
    name: 'Client 11',
    logo: 'https://seeklogo.com/images/R/Ramada_Lake_Balaton-logo-3299DBD2E5-seeklogo.com.png' // Replace with actual image
  },
  {
    name: 'Client 12',
    logo: 'https://www.welspuncorp.com/images/logo.webp?v=1.0' // Replace with actual image
  },
  {
    name: 'Client 13',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwqSWc_uPNgptMPhWi6jgpShNqu7sZ2McxA&s' // Replace with actual image
  }
];

const ClientList = () => {
  return (
    <div className='client-list-container'>
      <h3>At <span>Agni Fire Product Services</span>, we take pride in the partnerships we've built with some of the most respected brands in the industry. Over the years, we’ve had the privilege of working with forward-thinking companies, helping them achieve their goals through innovative solutions and dedicated service.

Below are a few of our valued clients who trust us to deliver excellence.</h3>
      <h1>100+ Clients</h1>
      <div className="client-list">
        {clients.map(client => (
          <ClientCard key={client.name} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientList;
