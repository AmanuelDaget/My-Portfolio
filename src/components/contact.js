import React from 'react';
import './Contact.css';

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
        <p><i className="fa fa-map-marker"></i> Gondar,Ethiopia</p>
        <p><i className="fa fa-envelope"></i> dagetamanuel@gmail.com</p>
        <p><i className="fa fa-phone"></i> +251 960 824 277</p>
      </div>
    </div>
  );
};
