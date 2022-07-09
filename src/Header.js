import logo from './logo.svg';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <div className="nav-bar">
                <div className="logo-container">
                    <img src={logo} className="logo-img"  />
                </div> 
                <ul className="nav-menu">
                  <li><NavLink to='/Home'>Home</NavLink></li>
                  <li><NavLink to='/About'>About</NavLink></li>
                  <li><NavLink to='/BlogList'>Blog</NavLink></li>
                  <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul> 
                <ul className="nav-title">
                  <li><h1>Blog Stack</h1></li>
                </ul>  
            </div>
            <div>
                <div className='header-container'>
                  <div className='header-container'>
                      Welcome
                  </div>
                </div>

            </div>
        </div>
        
        
    )
}

export default Header
