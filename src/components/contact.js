import React, { useState } from 'react';
import './Contact.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import success from '../assets/success.json'
import loadingAnim from '../assets/loading-anim-4-line.json'
import Lottie from 'react-lottie';


export const Contact = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const loadingDefaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loadingAnim,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      subject: '',
      message: '',
  });
  const [loading,setLoading]=useState(false)
  const [errors, setErrors] = useState('');
  const [submitError,setSubmitError]=useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const { fullName, email, subject, message } = formData;
    const newErrors = {};

    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      setErrors('Name should contain only letters');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors('Invalid email address');
      return false;
    }
    if (subject.trim() === '') {
      setErrors('Subject is required');
      return false;
    }
    if (message.trim() === '') {
      setErrors('Message is required');
      return false;
    }
     return true
  };

  const handleSubmit = async (e) => {
      setLoading(true)
      e.preventDefault();

      if (!validate()) {
        setLoading(false)
        setSubmitError(true)
        setSubmitSuccess(false)
        return;
      }

    try {
        setSubmitError(false)
        await addDoc(collection(db, 'contact-message'), formData);
        setLoading(false)
        setSubmitSuccess(false)
        setSubmitSuccess(true); 
        setFormData({ fullName: '', email: '', subject: '', message: '' }); 
      } catch (error) {
        setLoading(false)
        setSubmitError(true)
        setErrors('Unknown error occured !')
        console.error('Error adding document: ', error);
      }
  };

  return (
      <div className='all-contact-container'>
         <div className='alert-message'>
            {submitSuccess && 
                  <>
                     <p className="success-message"><Lottie options={defaultOptions} height={60} width={60}/>Message sent successfully!</p>
                  </>
            }
            {submitError && <p className="error-message">{errors}</p>}
         </div>
         { loading ?
             <div className='loading-container'>
               <Lottie options={loadingDefaultOptions} height={100} width={100}/>
             </div>
          : <div className="contact-container">
                <div className="contact-form">
                  <h2>Contact Form</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" id="fullName" placeholder="Your Name" name='fullName'
                          value={formData.fullName} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className='' id="email" placeholder="Your email" name='email'
                          value={formData.email} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" id="subject" placeholder="Subject" name='subject'
                          value={formData.subject} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" placeholder="Your message" name='message'
                          value={formData.message} onChange={handleChange}
                      >
                      </textarea>
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

         }
      </div>
  );
};
