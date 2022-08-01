import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
 
    render() {
        return (<>
        
        <div className='top_header'>
          <img src='img/top_line.png' />
        </div>
        <div className="container cont ">
          <div className="header">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid p-0">
              <Link href="/" className="navbar-brand"><a><img src='../img/logo.png' /></a>
            </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon">  <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492929/serge/menu_l9ovb3.png' /></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                  <div className="navbar-nav">
                    <Link href="/" ><a className="nav-item nav-link ">Home</a>
                    </Link>
                    <Link href="/#about" ><a className="nav-item nav-link ">About Me</a>
                    </Link>
                    <Link href="/#experience" ><a className="nav-item nav-link ">Experience</a>
                    </Link>
                    <Link href="/#experience" ><a className="nav-item nav-link ">My Companies</a>
                    </Link>
                    <a href="#" className="nav-item nav-link" >My Articles</a>
                  </div>
                  <div className="navbar-navs ">
                  <ul className="nav navbar-navs ">
          <li><a href="#"><span className="glyphicon glyphicon-user"></span> EN</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> ER</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> ES</a></li>
        </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        </>
        
            )
        }
    }
    export default Header
