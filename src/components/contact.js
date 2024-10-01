import React from 'react';
import './Contact.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className='' id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
      <div className="contact-details">
        <h2>Contact details</h2>
        <p><LocationOnOutlinedIcon /> Gondar,Ethiopia</p>
        <p><EmailOutlinedIcon /> dagetamanuel@gmail.com</p>
        <p><PhoneOutlinedIcon /> +251 960 824 277</p>
      </div>
    </div>
  );
};
