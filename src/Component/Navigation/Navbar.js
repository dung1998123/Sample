import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Logo from '../../images/logo.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button 
            className={`navbar-toggler ${isExpanded ? '' : 'collapsed'}`} 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={isExpanded} 
            aria-label="Toggle navigation"
            onClick={this.toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div 
            className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} 
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#story">Chuyện tình</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">Khoảnh khắc</a>
              </li>
              <li className="nav-item">
                <a href="index.html">
                  <img href="index.html" src={Logo} alt="Logo"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#accept">Xác nhận</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#event">Tiệc báo hỷ</a>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;