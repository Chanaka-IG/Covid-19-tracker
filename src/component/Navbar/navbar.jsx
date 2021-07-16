
import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'


function NavBar() {


    return ( 
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                       Coivid-19 Tracker <i className="fa fa-diamond" aria-hidden="true"></i>  </Link>   
                    </div>

            </nav>    
        </div>    
     );
}
 
export default NavBar
