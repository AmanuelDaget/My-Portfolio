// Portfolio.js
import React, { useState } from 'react';
import './projects.css'; // Import the CSS file for styling
import A from '../assets/A.png'
import SearchIcon from '@mui/icons-material/Search';
import dashboard from '../assets/dashboard-img.PNG'
import mobileApp from '../assets/mobileAppQRShield.jpg'
import empDash from '../assets/employeeDash-img.png'

export const Projects = () => {
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
    <div className="project-page-container">
      <h1 className="my-projects-txt">My Projects</h1>
      <p className="search-txt">Search projects by title or filter by category</p>
      <div className="projects-search-filter">
        
        <div className='search'>
                  <div className='search-icon'>
                     <SearchIcon />
                  </div>
                  <input type="text" placeholder="Search Projects" className="search-input"
                        value={searchInput}
                        onChange={handleSearchChange}
                  />
        </div>
        <select className="projects-filter-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All Projects</option>
          <option value="web">Web Application</option>
          <option value="mobile">Mobile Application</option>
        </select>
      </div>

      <div className="all-projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="projects-card">
            <img src={project.image} alt={project.title} className="projects-image" />
            <div className="projects-details">
              <h3 className="projects-title">{project.title}</h3>
              <p className="projects-category">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
