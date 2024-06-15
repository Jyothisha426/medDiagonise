import React,{useEffect} from 'react'
import Header from '../Header'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css' 

const Contact = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate('/register');
    }
  }, [jwtToken, navigate]);

  if (jwtToken === undefined) {
    return null;
  }
  return (
    <>
    <Header />
    <div className="emergency-contacts-container">
      <h1 className = "heading">Emergency Health Contact Details</h1>
      <div className="contact-section">
        <h2>India</h2>
        <ul>
          <li><a href="tel:112">Call Emergency: 112</a></li>
          <li><a href="tel:102">National Ambulance Service: 102</a></li>
          <li><a href="tel:9152987821">Mental Health Helpline: 9152987821</a></li>
        </ul>
      </div>
      <div className="contact-section">
        <h2>United States</h2>
        <ul>
          <li><a href="tel:911">Call Emergency: 911</a></li>
          <li><a href="tel:1-800-222-1222">Poison Control: 1-800-222-1222</a></li>
          <li><a href="tel:1-800-273-8255">Suicide Prevention: 1-800-273-8255</a></li>
        </ul>
      </div>
      <div className="contact-section">
        <h2>United Kingdom</h2>
        <ul>
          <li><a href="tel:999">Call Emergency: 999</a></li>
          <li><a href="tel:111">NHS Direct: 111</a></li>
          <li><a href="tel:116123">Samaritans: 116 123</a></li>
        </ul>
      </div>
      <div className="contact-section">
        <h2>Canada</h2>
        <ul>
          <li><a href="tel:911">Call Emergency: 911</a></li>
          <li><a href="tel:1-866-797-0000">Telehealth Ontario: 1-866-797-0000</a></li>
          <li><a href="tel:1-833-456-4566">Crisis Services Canada: 1-833-456-4566</a></li>
        </ul>
      </div>
      <div className="contact-section">
        <h2>Australia</h2>
        <ul>
          <li><a href="tel:000">Call Emergency: 000</a></li>
          <li><a href="tel:1800-022-222">Healthdirect: 1800-022-222</a></li>
          <li><a href="tel:131114">Lifeline Australia: 13 11 14</a></li>
        </ul>
      </div>
      
    </div>
    </>
  )
}

export default Contact
