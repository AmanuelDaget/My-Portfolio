// Portfolio.js
import React from 'react';
import './projects.css'; // Import the CSS file for styling
import img1 from'../assets/A.png'
export const Projects = () => {
  const projects = [
    {
      title: 'Google Health Platform',
      category: 'Web Application',
      image: img1,
    },
    {
      title: 'Phoenix Digital Agency',
      category: 'Mobile Application',
      image: img1,
    },
    {
      title: 'Project Management UI',
      category: 'UI/UX Design',
      image: img1,
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Projects Portfolio</h1>
      <p className="portfolio-subtitle">Search projects by title or filter by category</p>

      <div className="portfolio-search-filter">
        <div className="search-box">
          <input type="text" placeholder="Search Projects" className="search-input" />
        </div>
        <div className="filter-dropdown">
          <select className="filter-select">
            <option value="all">All Projects</option>
            <option value="web">Web Application</option>
            <option value="mobile">Mobile Application</option>
            <option value="design">UI/UX Design</option>
          </select>
        </div>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
