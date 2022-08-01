import Link from "next/link";
// import  {useRouter}  from "next/router";
import Blogs from "../components/Blogs/BlogsFr";
import { useEffect } from 'react'

function AllBlogs() {
  
  
  return (
    <>
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
                  <span className="navbar-toggler-icon"> <img src='img/menu.png' /></span>
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
                  <div className="navbar-nav ">
                  <ul className="nav navbar-nav ">
            

            <li>
               <Link href={`/AllBlogs`}>
              <a className="glyphicon glyphicon-user">
              <span className="glyphicon glyphicon-user"></span> EN</a>
              </Link>
            </li>
          

          <li>
             <Link href={`/AllBlogsFr`}>
                <a className="glyphicon glyphicon-log-in">
                  <span className="glyphicon glyphicon-user"></span> FR</a>
                </Link>
          </li>
          

          
                    <li>
             <Link href={`/AllBlogsEs`}>
                <a className="glyphicon glyphicon-log-in">
                  <span className="glyphicon glyphicon-user"></span> ES</a>
                </Link>
          </li>



          </ul>
        

                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

      <Blogs />
      <footer className="ft-outer  bg">







<div className="copyright">
  <div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
      <a href="">2019-2022 Serge Maurice Lobréau</a>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
      <a href="">2019-2022 Serge Maurice Lobréau</a>
    </div>
  </div>

</div>





</footer>
    </>
  );
}

export default AllBlogs;
