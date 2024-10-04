import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import SWlogo from '../../public/img/star-wars-logo.png';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".navbar-toggle-icon");
    let pageLinks = document.querySelector(".pages-links");
    console.log(pageLinks);
    hamburger.addEventListener('click', () => {
      pageLinks.classList.toggle('active');
    })

    document.querySelectorAll(".navbar li").forEach(link => 
      link.addEventListener('click', () => {
        pageLinks.classList.remove('active');
      }))
    
  },[])

  return (
    <nav className='navbar'>

      <div className="logo">
        <Link to="/">
          <img src={SWlogo} className="sw-logo" />
        </Link>
      </div>
      
      <div className="character-search-bar">
        <input type="text" placeholder="Enter your character..." />
        <button>Buscar</button>
      </div>

      <div className="hamburger">
        <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
        <label htmlFor="navbar-toggle" className="navbar-toggle-icon">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </label>
      </div>
      
      <div className="pages-links" id='pages-links'>
        <ul id='navbar-menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;