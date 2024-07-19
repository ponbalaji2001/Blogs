import logo from '../src/assets/blog-logo.png';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="nav-bar">
                <div className="logo-container">
                    <img src={logo} className="logo-img" />
                    <p>InsightInk</p>  
                </div> 
                <p className="user">Hi, Balaji</p>
            </div>
        </div>  
    )
}

export default Header
