import Link from 'next/link'
// import  {useRouter}  from "next/router";
import LatestBlogs from "../components/LatestBlogs/LatestBlogsfr";
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
              <p>{"J'ai acquis 15 ans d'expérience où j'ai commencé dans le secteur des hedge funds, où en raison de mon excellent Mémoire lors de mon Master sur la création de richesse basée sur les produits dérivés, fait moi étant chassé vers un autre rôle important pour vendre des restructurations majeures et des produits dérivés produits financiers basés au niveau national. Souhaitant changer de cette éminemment politique secteur, j'ai exploré le secteur technologique populaire pour travailler pour Microsoft à leur siège européen en Irlande, en tant que chef de projet, ce qui a créé une base solide pour ma carrière dans technologie.Cependant, cela m'a ramené à ma vocation dans le monde bancaire, travaillant avec les grandes banques internationales."} <br /><br />

                 {"Comme j'ai fondé une nouvelle famille, j'ai alors décidé de revenir en France et de travailler pour le Crédit Agricole. Tout au long de ma carrière dans le secteur bancaire et la gestion de patrimoine, j'ai géré plus de 2,5 milliards de dollars en AUM et plus de 800 comptes d'entreprise. Certaines de mes tâches et responsabilités dans ce rôle de finance d'entreprise allaient de l'économie modélisation, banque, gestion des risques, planification financière et gestion de patrimoine, négociation avec les institutions et les UHNWI.      "}          <br /><br />
                 
                 {"La dernière partie de cette période au Crédit Agricole, j'ai été initié au marketing de réseau de produits que j'ai réussi à réussir avec facilité grâce à ma gestion de clientèle et compétences relationnelles, gagner un revenu mensuel à six chiffres à temps partiel. Le revenu et le style de vie m'ont fait commencer mon parcours d'entrepreneur à temps plein, en passant à Mines d'or à la demande d'un ancien client. Je me suis reconnecté à mes racines et à mes proches en république du Congo, pour commencer le commerce de l'or."}
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