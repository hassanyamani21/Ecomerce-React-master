import React from "react";
import { Link } from "react-router-dom";

import Cookies from 'universal-cookie';

const TopMenu = () => {
  function handleClick(e) {
    const cookies = new Cookies();
    e.preventDefault();
    console.log('The link was clicked.');
    cookies.set('loggedin', 'false', { path: '/' });
    window.location.href = '/'
  }

  function home(){
    window.location.href = '/'
  }
  return (
    <React.Fragment>
      <nav className="  bg-dark p-0">
        <div className="container-fluid">
       
         
          <div className="d-flex" id="navbarSupportedContent">
            <ul className="d-flex" style={{listStyleType:"none"}}>
            <li>

              <Link className="dropdown-item text-white" onClick={home}>
                     Home
                    </Link>
                    </li>

                 <li>
                    <Link className="dropdown-item text-white" to="/account/signin">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item  text-white" to="/account/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to='#' onClick={handleClick}>
                      Logout
                    </Link>
                  </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopMenu;
