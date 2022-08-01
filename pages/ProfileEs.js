import Link from 'next/link'
// import  {useRouter}  from "next/router";
import LatestBlogs from "../components/LatestBlogs/LatestBlogses";
import { useEffect } from 'react'
// import Header from '../components/Layout/Header'

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
                  <ul className="nav navbar-navs ">
            

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
              <p>{"Tengo 15 años de experiencia donde comencé dentro del sector de fondos de cobertura, donde debido a mi excelente Memoire durante mi Maestría en creación de riqueza basada en derivados, hecho yo siendo cazado para otro papel importante para vender importantes reestructuraciones y derivados productos financieros a nivel de país. Deseando cambiar de ese altamente político sector, exploré el sector de la tecnología popular para trabajar para Microsoft en su sede europea en Irlanda, como gerente de proyectos, lo que creó una base sólida para mi carrera en tecnología. Sin embargo, me devolvió a mi vocación en el mundo bancario nuevamente, trabajando con los principales bancos internacionales."}<br /><br />

                {"Como comencé una nueva familia, decidí regresar a Francia y trabajar para Credit Agrícola. A lo largo de mi carrera bancaria y de gestión patrimonial, gestiono más de 2500 millones de dólares en AUM y más de 800 cuentas corporativas. Algunas de mis tareas y responsabilidades en este rol de finanzas corporativas iban desde la economía modelización, banca, gestión de riesgos, planificación financiera y gestión de patrimonios, negociación con instituciones y UHNWI."} 
                <br /><br />
                {" La última parte de ese tiempo en Credit Agricole, me presentaron al mercadeo en red de productos que logré tener éxito con facilidad debido a mi gestión de clientes y habilidades de relación, ganando un ingreso mensual de seis cifras a tiempo parcial. Los ingresos y el estilo de vida me hicieron comenzar mi viaje empresarial de tiempo completo, con un cambio a Minas de oro a partir de un pedido realizado por un antiguo cliente. Me reconecté con mis raíces y parientes. en la República del Congo, para iniciar el negocio de comercio de oro."}
</p>
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