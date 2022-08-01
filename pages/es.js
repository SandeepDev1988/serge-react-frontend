import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import Subscribe from '../components/Subscribe/Subscribe'
import Trending from '../components/Blogs/TrendingEs'
import Script from 'next/script'
import Books from '../components/Books/BooksEs'
import Videos from '../components/Videos/Videos'
import Company from '../components/Company/Company'
// import { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function es() {
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
                Fundador en Grupo Sapian y Grupo Flash
              </h6>
              <p data-aos="fade-right" data-aos-delay="1900" data-aos-easing="ease-out-cubic" data-aos-duration="900">
                “Si NUNCA has sufrido hambre, NUNCA entenderás nuestro valor y por qué lo suficiente NUNCA será suficiente.”

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
              <a href="#experience" className='rdmre-btn mt-4' data-aos="fade-right" data-aos-delay="800" data-aos-easing="ease-out-cubic" data-aos-duration="500">Empezar</a>
            </div>
            <div className='col-lg-6 col-md-6 col-12' data-aos="fade-left" data-aos-delay="1000" data-aos-easing="ease-out-cubic" data-aos-duration="500">
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
              <h2 className="bigheading" data-aos-delay="900" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="900">Sobre mí<img src='img/heading-line.png' /></h2>
              <p data-aos="fade-left" data-aos-delay="1000" data-aos-easing="ease-out-cubic" data-aos-duration="900">
                Soy Serge Maurice Lobréau, Fundador de SAPIAN y FLASH GROUP Estoy diseñando productos y servicios disruptivos en el área financiera Para llevar la inclusión financiera al bien común
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
                <h2>África</h2>
                <span>El lugar donde nací y he sido formado</span>
                <p>Nací en Mbuji-Mayi a finales de los 70 en lo que
                   Solíamos llamar a Zaire. que miraba eso
                   el tiempo como normalidad con mis ojos africanos,
                   parecía ser una existencia muy dura para
                   mis futuros ojos europeos. Solíamos tener
                   menos que nada, pero no puedo recordar una
                   día que no fui FELIZ. Que me enseñes que
                   sin importar los obstáculos y dificultades de la vida, simplemente
                   ¡Sonríe y todo estará bien!</p>
              </div>
              <div className='col-lg-4 col-md-4 col-12' data-aos="zoom-in" data-aos-delay="1000">
                <h2>Europa</h2>
                <span>El lugar donde crecí y transformé</span>
                <p>Solía pensar que Europa estaba en el cielo cuando era muy joven en África. Cuando aterricé en el aeropuerto Charles de Gaulle en 1989, las imágenes en la televisión de personas rompiendo el Muro de Berlín llorando y abrazándose se grabaron en mi memoria. Inmediatamente entendí que la observación y el rápido aprendizaje rápido eran primordiales para sobrevivir.
                </p>
              </div>
              <div className='col-lg-4 col-md-4 col-12' data-aos="zoom-in" data-aos-delay="1200">
                <h2>El mundo</h2>
                <span>El lugar en el que estoy evolucionando</span>
                <p>Trabajé y viví en los 5 continentes
                   con un tropismo en África como yo personalmente
                   visitó 44 países en 54! soy un mundial
                   Ciudadano y el mundo es mi hogar. Como
                   tal, todo lo que estoy haciendo y
                   especialmente en los negocios tiene un alcance global
                   Plano. Y estoy tratando de pensar como
                   tanto como sea posible para construir soluciones para
                   el bien común.</p>
              </div>

            </div>
          </div>
          <img className='design_image2' src="img/graphic1.png" data-aos="fade-down" data-aos-delay="500" />

        </div>
      </section>


      <section className="exper-main  pad80 " id='experience'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 exper-col pr80">
              <h2 className="bigheading br-btm" data-aos="fade-up" data-aos-duration="900">
                Experiencia
                <img src='img/heading-line.png' />
              </h2>
              <p data-aos="fade-up" data-aos-duration="900">Obtuve 15 años de experiencia en los que comencé en el sector de los fondos de cobertura donde, debido a mi excelente memoria durante mi maestría en creación de riqueza basada en derivados, me buscaron para otro puesto importante para vender productos financieros basados en derivados y reestructuraciones importantes en un país. nivel</p>
             <Link href="/Profile">
              
              <button className="rdmre-btn" data-aos="fade-up" data-aos-duration="900">Lee mas</button>
              </Link>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 exper-img " >
            <img src='https://res.cloudinary.com/sapiangroup/image/upload/v1658492929/serge/experience_img_uqdezg.png' />
            </div>
          </div>
        </div>
      </section>

      <section className="Entrepreneur-sec pad80 bg line">
        <div className="container">
          <h2 className="bigheading mt-4 mb-5 " data-aos="fade-up" data-aos-duration="900">Experiencia Emprendedores<img src='img/heading-line.png' /></h2>
          <div className="row pt-5 pb-5 mt-3">
            <div className="col-md-6 col-sm-12 col-lg-6 flash-col pr80" data-aos="fade-left" data-aos-duration="900">
              <h3 className="md-hd">Grupo Flash</h3>
              <p>Nuestra solución proporciona moneda vinculada a servicios públicos con una volatilidad controlada y servicios de intercambio con la
                 el costo más bajo del mercado. Nuestra tecnología combina servicios financieros regulares y finanzas impulsadas por blockchain
                 tecnología para llevar a los usuarios una solución eficiente y empoderamiento en sus transacciones financieras diarias.</p>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 flash-col pl80" data-aos="fade-left" data-aos-duration="900">
              <h3 className="md-hd">grupo español</h3>
              <p>Sapoan Group es el holding de varios negocios de gestión patrimonial, gestión de activos, servicios de canal de ventas y negocios asociados a Blockchain dentro del grupo. El grupo tiene licencia en Europa (Estonia) con licencias de eWallet, Exchange e instituciones financieras.</p>
            </div>
          </div>

        </div>
      </section>


      <Books />

      <Company />
      {/* <section className="compny-sec pad80 bg pt-0 line" id='company'>
        <div className="container">
          <h2 className="bigheading text-center " data-aos="fade-up" data-aos-duration="900">
            My Companies
            <img src='img/heading-line.png' />
          </h2>
          <div className="row pt-5">

            <div className="col-md-12 col-sm-12 col-lg-12  coimg-col ">
              <div className="row inner-row">
                <div className="col-md-2 col-6 " data-aos="fade-right" data-aos-duration="900">
                  <div className='companys-logo'>
                    <img src="img/sm.png" />
                  </div>

                </div>
                <div className="col-md-2 col-6 " data-aos="fade-left" data-aos-duration="900">
                  <div className='companys-logo'>
                    <img src="img/sapian-company.png" />
                  </div>

                </div>
                <div className="col-md-2 col-6 " data-aos="fade-left" data-aos-duration="900">
                  <div className='companys-logo'>
                    <img src="img/flash-company.png" />
                  </div>
                </div>
                <div className="col-md-2 col-6 " data-aos="fade-right" data-aos-duration="900">
                  <div className='companys-logo'>
                    <img src="img/sm.png" />
                  </div>
                </div>
                <div className="col-md-2 col-6 " data-aos="fade-left" data-aos-duration="900">
                  <div className='companys-logo'>
                    <img src="img/sapian-company.png" />
                  </div>
                </div>
                <div className="col-md-2 col-6 " data-aos="fade-left" data-aos-duration="900">
                  <div className='companys-logo'>
                    <img src="img/flash-company.png" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section> */}

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
