import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Products from './Components/Products';
import OurServices from './Components/OurServices';
import Footer from './Components/Footer';
import ClientList from './Components/ClientList';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Navbar/>
    <HomePage/>
    <Products/>
    <OurServices/>
    <ClientList/>
    <Footer/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
