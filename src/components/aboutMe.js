import React from 'react';
import './AboutMe.css';
import profileImage from '../assets/AmanPortfolioImg.png'; 
import bootstrapIcon from '../assets/bootstrap-icon.png'
import expressJs from '../assets/expressJsIcon.png'
import mysql from '../assets/mysql-logo.png'

export const AboutMe = () => {
  const skillImages = [
    { name: 'HTML5', src: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
    { name: 'CSS3', src: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
    { name: 'Bootstrap 5', src: bootstrapIcon },
    { name: 'JavaScript', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
    { name: 'PHP', src: 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png' },
    { name: 'React', src: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    { name: 'Node.js', src: 'https://nodejs.org/static/images/logo.svg' },
    { name: 'Express.js', src: expressJs },
    { name: 'MongoDB', src: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png' },
    { name: 'MySQL', src: mysql },
    { name: 'React Native', src: 'https://reactnative.dev/img/header_logo.svg' },
  ];
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={profileImage} alt="Amanuel Daget" />
      </div>
      <div className="about-text">
        <p>
          My name is Amanuel Daget. I am a full stack MERN developer. I have experience working with technologies
          like HTML, CSS, Bootstrap CSS, PHP, JavaScript, React Js, Node.js, Express.js, MySQL, and MongoDB. I am 
          passionate about coding and constantly improving my skills. I am a Computer Science graduate with a 3.92 GPA.
        </p>
        <p className='secont-aboutMe-txt'>
          I enjoy taking on challenging projects and learning new technologies to build efficient, scalable web applications. I aim to leverage my skills to contribute to innovative projects and bring value to any team I am part of.
        </p>
      </div>
      <div className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
        <p>
          Here are some of the key technologies and frameworks I am working with:
        </p>
      </div>
      <div className="skills-grid">
        {skillImages.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.src} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
