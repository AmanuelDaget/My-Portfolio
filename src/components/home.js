import React from 'react';
import './Home.css'; 
import Lottie from 'react-lottie';
import programmerAnimation from '../assets/programmer.json';
import A from '../assets/A.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';


export const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: programmerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const projects = [
    {
      id: 1,
      title: 'Google Health Platform',
      category: 'Web Application',
      image: 'path-to-image-1', // Replace with actual image paths
    },
    {
      id: 2,
      title: 'Phoenix Digital Agency',
      category: 'Mobile Application',
      image: 'path-to-image-2',
    },
    {
      id: 3,
      title: 'Project Management UI',
      category: 'UI/UX Design',
      image: 'path-to-image-3',
    },
  ];
  return (
    <div className='home-container'>
        <section className="home-section">
          <div className="content">
            <h1>HI, I AM Amanuel</h1>
            <p>A Full-Stack Developer</p>
            <button className="download-btn">
              <i className="fas fa-download"></i> Download CV
            </button>
          </div>
          <div className="animation-container">
            <Lottie options={defaultOptions} />
          </div>
        </section>
        <section className="projects-section">
            <div className="projects-header">
              <h1>Projects</h1>
              <p>Search projects by title or filter by category</p>
            </div>
            <div className="search-filter">
              <input
                type="text"
                placeholder="Search Projects"
                className="search-bar"
              />
              <select className="filter-select">
                <option>All Projects</option>
                <option>Web Application</option>
                <option>Mobile Application</option>
                <option>UI/UX Design</option>
              </select>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <div className="project-card" key={project.id}>
                  <img src={A} alt={project.title} className="project-img" />
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              ))}
            </div>
            <div className="view-more-btn">
              <button>More Projects</button>
            </div>
        </section>
    </div>
      
  );
};

