import Link from 'next/link'
// import  {useRouter}  from "next/router";
import LatestBlogs from "../components/LatestBlogs/LatestBlogs";
import { useEffect } from 'react'
import Header from '../components/Layout/Header'

function Profile() {
 
  return <> <header className="bgbanner blog_header">


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
                  <ul className="nav navbar-navs">
            

            <li>
               <Link href={`/Profile`}>
              <a className="glyphicon glyphicon-user">
              <span className="glyphicon glyphicon-user"></span> EN</a>
              </Link>
            </li>
          

          <li>
             <Link href={`/ProfileFr`}>
                <a className="glyphicon glyphicon-log-in">
                  <span className="glyphicon glyphicon-user"></span> FR</a>
                </Link>
          </li>
          

          
                    <li>
             <Link href={`/ProfileEs`}>
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




  </header>
    <div className="container ">
      <div className='row mt-5'>
        <div className='col-lg-8 col-md-8 col-12'>
          <div className='prfile_data'>
            <div className='profile_img'>
              <img src="img/profile.jpg" />
              <p>I got 15 years of experience where I started within the hedge fund sector, where due to my
                excellent “Memoire” during my Master’s degree on derivative based wealth creation, made
                me being head hunted to another important role to sell major restructuring and derivatives
                based financial products at a country level. Wishing to change from that highly political
                sector, I explored the popular technology sector to work for Microsoft at their European HQ
                in Ireland, as a project manager which created a strong foundation for my career in
                technology.However, it brought me back to my calling into the banking world again, working
                with major international banks.<br /><br />

                As I started a new family, I then decided to move back to France and work for Credit
                Agricole. Throughout my banking and wealth management career, I manage over $2.5 B in
                AUM and over 800 corporate accounts.
                Some of my tasks and responsibilities in this corporate finance role ranged from economic
                modelling, banking, risk management, financial planning and wealth management, dealing
                with institutions and UHNWIs.
                <br /><br />
                The later part of that time at credit Agricole, I was introduced to network marketing of
                products which I managed to succeed with ease due to my client management and
                relationship skills, earning a six figure income monthly on a part time basis.
                The income and lifestyle made me start my full time entrepreneur journey, with a move to
                Gold mines from a request made by a former client. I reconnected to my roots and relatives
                in the republic of Congo, to commence the Gold trading business.</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-12'>
          <LatestBlogs />
        </div>
      </div>
    </div>

  </>
}

export default Profile