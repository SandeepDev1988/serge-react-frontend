import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import Subscribe from '../components/Subscribe/Subscribe'
import Trending from '../components/Blogs/Trending'
import Script from 'next/script'
import Books from '../components/Books/Books'
import Videos from '../components/Videos/Videos'
import Company from '../components/Company/Company'
// import { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function Home() {
  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, [])

  // const googleTranslateElementInit = () => {

  //   new window.google.translate.TranslateElement({
  //     pageLanguage: 'en',
  //     includedLanguages: "en,fr,es", // include this for selected languages
  //     layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  //   },
  //     'google_translate_element');

  // }
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous" />

      <Script src="owlcarousel/owl.carousel.min.js"></Script>
      <Head>
        <title>Serge Maurice Lobreau</title>
      </Head>
      <div className='top_header'>
        <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492929/serge/top_line_upzews.png' />
      </div>
      <header className="bgbanner " data-aos="fade-zoom-in" >

        <div className="container cont " data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">
          <div className="header">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid p-0">





                <Link href="/">
                  <a className="navbar-brand"><img src='img/logo.png' /> </a>
                </Link>






                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon">  <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492929/serge/menu_l9ovb3.png' /></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                  <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link active">Home</a>
                    <a href="#about" className="nav-item nav-link">About Me</a>
                    <a href="#experience" className="nav-item nav-link">Experience</a>
                    <a href="#company" className="nav-item nav-link" >My Companies</a>
                    <a href="#" className="nav-item nav-link" >My Articles</a>
                  </div>
                  <div className="navbar-navs ">
                    <ul className="nav navbar-navs ">
                      <li>



                        <Link href="/">
                          <a><span className="glyphicon glyphicon-user"></span>EN</a>
                        </Link>




                      </li>
                      <li>

                        <Link href="/fr">
                          <a><span className="glyphicon glyphicon-user"></span>FR</a>
                        </Link>

                      </li>


                      <li>



                        <Link href="/es">
                          <a><span className="glyphicon glyphicon-user"></span>ES</a>
                        </Link>




                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="container banner-text pt-5">
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12 pt-2' >
              <h2 data-aos="fade-right" data-aos-delay="800" data-aos-easing="ease-out-cubic" data-aos-duration="900">Hola! I’m</h2>
              <h1 data-aos="fade-right" data-aos-delay="800" data-aos-easing="ease-out-cubic" data-aos-duration="900">
                Serge Maurice Lobréau
                <img src='img/heading-line.png' />
              </h1>
              <h6 data-aos="fade-right" data-aos-delay="1500" data-aos-easing="ease-out-cubic" data-aos-duration="900">
                Founder at Sapian Group & Flash Group
              </h6>
              <p data-aos="fade-right" data-aos-delay="1900" data-aos-easing="ease-out-cubic" data-aos-duration="900">
                “If you have NEVER suffered starvation, you will
                NEVER understand our grit and why enough will NEVER
                Be enough”

              </p>
              <div className='social_icons' data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-duration="500">
                <div className='social_links' >
                  <a href='https://twitter.com/lobreauserge?lang=en'>
                    <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492930/serge/twitter_bemaak.png' />
                  </a>
                  <a href='https://www.facebook.com/lobreauserge/'>
                    <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492928/serge/facebook_xhnd4o.png' />

                  </a>
                  <a href='https://www.instagram.com/sergelobreau'>
                    <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492929/serge/instagram_boekye.png' />
                  </a>
                  <a href='https://www.youtube.com/channel/UCES-8FaWOKdivjurSCdsbxg'>
                    <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492930/serge/youtube_bgvwoc.png' />
                  </a>
                  <a href=''>
                    <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492929/serge/snapchat_jvlvvd.png' />
                  </a>
                </div>
              </div>
              <a href="#experience" className='rdmre-btn mt-4' data-aos="fade-right" data-aos-delay="800" data-aos-easing="ease-out-cubic" data-aos-duration="500">Get Started</a>
            </div>
            <div className='col-lg-6 col-md-6 col-12' data-aos="fade-UP" data-aos-delay="1000" data-aos-easing="ease-out-cubic" data-aos-duration="500">
              <img src="https://res.cloudinary.com/sapiangroup/image/upload/v1658492930/serge/serge_image_p4halt.png" />
            </div>

          </div>

        </div>

      </header>

      {/* <div className='container mt-5 pt-5'>
    <div className='videodv'>
                  <a href="#" >
                    <img src="img/serge.png" />
                  </a>
                  <div className='video_animation'>
                    <div className="video-main">
                      <div className="promo-video">
                        <div className="waves-block">
                          <div className="waves wave-1"></div>
                          <div className="waves wave-2"></div>
                          <div className="waves wave-3"></div>
                        </div>
                      </div>
                      <a href="#" className="video video-popup mfp-iframe" data-bs-toggle="modal" data-bs-target="#exampleModal"> <img src="img/playbtn.png" /></a>
                    </div>
                  </div>

                </div>
      </div>   */}
      <Videos />


      <section id="about" className="about-sec pt-3  mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 abt-img " data-aos-delay="500" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="900">
              <div className=''>
                <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492929/serge/about-us_yktkzi.png' />
              </div>
              <div>


              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 abt-text pl80"  >
              <h2 className="bigheading" data-aos-delay="900" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="900">About me    <img src='img/heading-line.png' /></h2>
              <p data-aos="fade-left" data-aos-delay="1000" data-aos-easing="ease-out-cubic" data-aos-duration="900">
                I am Serge Maurice Lobréau,Founder at SAPIAN and FLASH GROUP
                I am designing disruptive products and services into the
                financial area To bring financial inclusion for the common good
              </p>
              <img className='graphic_image' src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492928/serge/graphic_yvw8xd.png' data-aos="zoom-in" data-aos-delay="900" />
            </div>
          </div>
        </div>
      </section>



      <section className='growup'>
        <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492928/serge/graphic2_conqo3.png' className='graphic2' data-aos="zoom-in" data-aos-delay="900" />
        <div className='container '>

          <img className='design_image' src="https://res.cloudinary.com/sapiangroup/image/upload/v1658492928/serge/graphic1_pnjxy7.png" data-aos="fade-up" data-aos-delay="500" />

          <div className='grow-inner'>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-12' data-aos="zoom-in" data-aos-delay="800">
                <h2>Africa</h2>
                <span>The place I was born and have been shaped</span>
                <p>I was born in Mbuji-Mayi late 70’s in what
                  we use to call Zaïre. what looked at that
                  time as normality with my african eyes,
                  appeared to be a very tough existence for
                  my future European eyes. We use to have
                  less than nothing, but I cannot remember a
                  day I was not HAPPY. That teach me that
                  no matter life hurdles and difficulties just
                  smile and everything will be OK!</p>
              </div>
              <div className='col-lg-4 col-md-4 col-12' data-aos="zoom-in" data-aos-delay="1000">
                <h2>Europe</h2>
                <span>The place I Grew up and transformed</span>
                <p>I used to think that Europe was in the
                  sky when I was very young in Africa.
                  When I land in Charles de Gaulle Airport
                  in 1989, the images on TV from people
                  breaking the Berlin Wall crying and
                  hugging burned into my memory. I
                  immediately understood that
                  observation and fast learning fast were
                  paramount to survive.
                </p>
              </div>
              <div className='col-lg-4 col-md-4 col-12' data-aos="zoom-in" data-aos-delay="1200">
                <h2>The world</h2>
                <span>The place I am evolving</span>
                <p>I worked and lived over 5 continents
                  with a tropism in Africa as I personally
                  visited 44 countries on 54! I am a global.
                  Citizen and the world is my home.As
                  such, everything I am doing and
                  especially in business has a global
                  blueprint. And I am trying to think as
                  much as possible to build solutions for
                  the greater good.</p>
              </div>

            </div>
          </div>
          <img className='design_image2' src="img/graphic1.png" data-aos="fade-down" data-aos-delay="500" />

        </div>
      </section>


      <section className="exper-main  pad80 " id='experience'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 col-12 exper-col pr80">
              <h2 className="bigheading br-btm" data-aos="fade-up" data-aos-duration="900">
                Experience
                <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492928/serge/heading-line_azddzc.png' />
              </h2>
              <p data-aos="fade-up" data-aos-duration="900">I got 15 years of experience where I started within the hedge fund
                sector where due to my excellent Memoire during my Master
                degree on derivative based wealth creation made me being head
                hunted to another important role to sell major restructuring and
                derivatives based financial products at a country level </p>








              <Link href="/Profile">




















                <button className="rdmre-btn" data-aos="fade-up" data-aos-duration="900">Read more</button>
              </Link>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 col-12 exper-img " >
              <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492929/serge/experience_img_uqdezg.png' />
            </div>
          </div>
        </div>
      </section>

      <section className="Entrepreneur-sec pad80 bg line">
        <div className="container">
          <h2 className="bigheading mt-4 mb-5 " data-aos="fade-up" data-aos-duration="900">Experience Entrepreneur   <img src='img/heading-line.png' /></h2>
          <div className="row pt-5 pb-5 mt-3">
            <div className="col-md-6 col-sm-12 col-lg-6 flash-col pr80" data-aos="fade-up" data-aos-duration="900">
              <h3 className="md-hd">Flash Group</h3>
              <p>Our solution provides utility pegged coin with a controlled volatility,and exchanger services with the
                lowest cost in the market. Our technology combines regular financial services and blockchain-powered finance
                technology to bring users an efficient solution and empowerment in their daily financial transactions.</p>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 flash-col pl80" data-aos="fade-up" data-aos-duration="900">
              <h3 className="md-hd">Spaian Group</h3>
              <p>Sapoan Group is the holding company for various wealth management, aset management, sales channel services
                and Blockchain associated businesses within the group. The group is licenced in Europe(Estonia) holding
                eWallet, Exchange and financial institution licences</p>
            </div>
          </div>

        </div>
      </section>


      <Books />

      <Company />


      <Trending />
      {/* <Subscribe /> */}
      <footer className="ft-outer  bg">







        <div className="copyright">
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12'>
              <a href="">2019-2022 Serge Maurice Lobréau</a>
            </div>
            {/* <div className='col-lg-6 col-md-6 col-12'>
              <a href="">2019-2022 Serge Maurice Lobréau</a>
            </div> */}
          </div>

        </div>





      </footer>


      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <iframe
                width={560}
                height={500}
                src="https://www.youtube.com/embed/Ey7mMijO0rM"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>





    </>

  )
}
