import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import A from '../assets/A.png'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Root = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme,setDarkTheme]= useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <Link className="logo" to={'/'}>
          <img src={A} alt="Logo" />
          <span>Amanuel</span>
        </Link>
        <nav className={menuOpen ? "active" : ""}>
          <div className='navs'>
             <NavLink to="/projects">Projects</NavLink>
             <NavLink to="/aboutme">About Me</NavLink>
             <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="theme-toggle">
             {
                darkTheme ? 
                   <NightlightOutlinedIcon onClick={toggleTheme}/>
                :  <LightModeOutlinedIcon onClick={toggleTheme}/>
             }
          </div>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
            {
                !menuOpen ? 
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
             :  <CloseIcon onClick={toggleMenu} className="hamburger" fontSize='large'/>
            }
        </div>
        
      </header>
      <div>
        <Outlet />
      </div>
      <section className='footer-section'>
             <p className='follow-txt'>Follow me</p>
             <div className='socials'>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                   <GitHubIcon style={{ fontSize: '45px'}} />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                   <LinkedInIcon style={{ fontSize: '45px' }} />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                   <TwitterIcon style={{fontSize: '45px'}} />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                   <YouTubeIcon style={{ fontSize: '45px'}} />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                   <FacebookIcon style={{fontSize: '45px'}} />
                </a>
             </div>
             <p className='copyright'> &copy; 2024 Amanuel Daget.</p>
        </section>
    </>
  );
};
