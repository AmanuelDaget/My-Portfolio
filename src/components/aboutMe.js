import React from 'react';
import './AboutMe.css';
import profileImage from '../assets/'; 

export const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={profileImage} alt="Amanuel Daget" />
      </div>
      <div className="about-text">
        <p>
          My name is Amanuel Daget. I am a full stack MERN developer. I have experience working with technologies like HTML, CSS, Bootstrap, PHP, JavaScript, React, Node.js, Express.js, MySQL, and MongoDB. I am passionate about coding and constantly improving my skills. I am a Computer Science graduate with a 3.9 GPA.
        </p>
        <p className='secont-aboutMe-txt'>
          I enjoy taking on challenging projects and learning new technologies to build efficient, scalable web applications. I aim to leverage my skills to contribute to innovative projects and bring value to any team I am part of.
        </p>
      </div>
    </div>
  );
};
