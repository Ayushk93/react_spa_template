import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button type='button' data-target='#navbarCollapse' data-toggle='collapse'
                className='navbar-toggler'>
                <span className="navbar-toggler-icon"></span>
            </button>
            <a href="#" className="navbar-brand">React SPA</a>
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className='nav-link' to='./home'> 
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='./cricketer'> 
                            Cricketers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='./schedule'> 
                            Schedule
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header;
