import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from "react-ga4";

ReactGA.initialize("G-VR5QWV2SB0");
ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
ReactGA.send({ hitType: "pageview", page: "/about", title: "About Page" });
ReactGA.send({ hitType: "pageview", page: "/achievements", title: "Achievements Page" });
ReactGA.send({ hitType: "pageview", page: "/contact", title: "Contact Page" });
ReactGA.send({ hitType: "pageview", page: "/page", title: "Flight Quest 1.0 Track" });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
