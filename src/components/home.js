import React, { useState } from 'react';
import './Home.css'; 
import Lottie from 'react-lottie';
import programmerAnimation from '../assets/programmer.json';
import dashboard from '../assets/dashboard-img.PNG'
import mobileApp from '../assets/mobileAppQRShield.jpg'
import empDash from '../assets/employeeDash-img.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';


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
      link.href = '/MyResume_3.pdf'; 
      link.download = 'AmanuelDaget_Resume.pdf'; 
      link.click();
  };
  const projects = [
    {
      id: 1,
      title: 'QRShield Anti Pc Theft',
      category: 'Web Application',
      image: dashboard, 
    },
    {
      id: 2,
      title: 'QRShield Anti Pc Theft ',
      category: 'Mobile Application',
      image: mobileApp, 
    },
    {
      id: 3,
      title: 'Full Stack Employee management',
      category: 'Web Application',
      image: empDash,
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
              <div className='search'>
                  <div className='search-icon'>
                     <SearchIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Projects"
                    className="search-bar" 
                    value={searchInput}
                    onChange={handleSearchChange}
                />
              </div>
              <select className="filter-select" value={selectedCategory} onChange={handleCategoryChange}>
                <option value={'all'}>All Projects</option>
                <option value={'web'}>Web Application</option>
                <option value={'mobile'}>Mobile Application</option>
              </select>
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div className="project-card" key={project.id}>
                  <img src={project.image} alt={project.title} className="project-img" />
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

