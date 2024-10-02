import React, { useState } from 'react';
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
import DownloadIcon from '@mui/icons-material/Download';


export const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: programmerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };
  const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/Resume.pdf'; // If the CV is inside `public/assets` folder
      link.download = 'AmanuelDaget_Resume.pdf'; // The name of the file after download
      link.click();
  };
  const projects = [
    {
      id: 1,
      title: 'QRShield Anti Pc Theft',
      category: 'Web Application',
      image: 'path-to-image-1', 
    },
    {
      id: 2,
      title: 'QRShield Anti Pc Theft ',
      category: 'Mobile Application',
      image: 'path-to-image-1', 
    },
    {
      id: 3,
      title: 'Full Stack Employee management',
      category: 'Web Application',
      image: 'path-to-image-2',
    },
    {
      id: 4,
      title: 'Pizza Ordering Front End ',
      category: 'Front End Web App',
      image: 'path-to-image-3',
    },
    {
      id: 5,
      title: 'Full Stack Registration and Login system ',
      category: 'Web Application',
      image: 'path-to-image-3',
    },
    {
      id: 6,
      title: 'Pizza Ordering Front End ',
      category: 'Web Application',
      image: 'path-to-image-3',
    },
  ];
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchInput.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || project.category.toLowerCase().includes(selectedCategory);
      return matchesSearch && matchesCategory;
  });

    const handleSearchChange = (e) => setSearchInput(e.target.value);
    const handleCategoryChange = (e) => setSelectedCategory(e.target.value.toLowerCase());
  return (
    <div className='home-container'>
        <section className="home-section">
          <div className="content">
            <h1>HI, I AM Amanuel</h1>
            <p>A Full-Stack Developer</p>
            <button className="download-btn" onClick={handleDownload}>
               <DownloadIcon /> Download Resume
            </button>
          </div>
          <div className="animation-container">
            <Lottie options={defaultOptions}/>
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
                value={searchInput}
                onChange={handleSearchChange}
             />
              <select className="filter-select" value={selectedCategory} onChange={handleCategoryChange}>
                <option>All Projects</option>
                <option>Web Application</option>
                <option>Mobile Application</option>
                <option>UI/UX Design</option>
              </select>
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div className="project-card" key={project.id}>
                  <img src={A} alt={project.title} className="project-img" />
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              ))}
            </div>
            <div className="view-more-btn">
              <Link to={'projects'}><button>More Projects</button></Link>
            </div>
        </section>
    </div>
      
  );
};

