import Axios from "axios";
import  {useRouter}  from "next/router";
import LatestBlogs from "../../components/LatestBlogs/LatestBlogsfr";
import Link from 'next/link'
import { useEffect } from 'react'
import Header from '../../components/Layout/Header'

const Post = ({ post }) => {

  
console.log('result is '+ post?.description_front_french);
  
  const router = useRouter();
  // const htmlString = {post.description_front};

  // for french content 
  const htmlString = post?.description_front_french
  const htmlStringen = post?.description_front
  

  // for blog title  
  const title = post?.title
  const titlesp = post?.titlefr





  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
  <header className="bgbanner blog_header">
  


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
               <Link href={`/blog/${post.slug}`}>
              <a className="glyphicon glyphicon-user">
              <span className="glyphicon glyphicon-user"></span> EN</a>
              </Link>
            </li>
          

          <li>
             <Link href={`/fr/${post.slug}`}>
                <a className="glyphicon glyphicon-log-in">
                  <span className="glyphicon glyphicon-user"></span> FR</a>
                </Link>
          </li>
          

          
                    <li>
             <Link href={`/es/${post.slug}`}>
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
  



    <div className="container "></div>
  </header>
  <section>
    <div className="container Blog_page_sidebar">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-12">
        <div className="blog_details">
        <div className="blog_image">
          
           
          <img src={post.image} />
        
        
        
        </div>
        <div className="blog_heading">
          {
            post?.titlefr?.length > 0 ?
            <h2>{post.titlefr}</h2>
          
          :
              <h2>{post.title}</h2>
          }
        </div>
        <div className="blog_detail">
         
			
						 {
            post?.description_front_french?.length > 0 ?
              <div className="product-des" dangerouslySetInnerHTML={{ __html: htmlString }} />
              : 
              <div className="product-des" dangerouslySetInnerHTML={{ __html: htmlStringen }} />
           }
		 
		 
        </div>
      </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
        <LatestBlogs />
</div>
      </div>

      
    
    </div>
  </section>
  <footer className="ft-outer  bg">
    <div className="copyright">
      <a href="">2019-2022 Serge Maurice Lobréau</a>
    </div>
  </footer>
</>

  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
 const { data } = await Axios.get(`https://lunar-estate.com/serge/admin-panel/api/blogbyidfr/${params.slug}`);
  const post = data;
  return {
    
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await Axios.get("https://lunar-estate.com/serge/admin-panel/api/blogs");
  const posts = data.slice(0, 10);
  const paths = posts.map((post) => ({ params: { slug: post.slug.toString() } }));
  return {
    paths,
    fallback: true,
  };
};