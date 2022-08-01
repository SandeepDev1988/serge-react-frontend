import Axios from "axios";
import  {useRouter}  from "next/router";
import LatestBlogs from "../components/LatestBlogs/LatestBlogs";
import Link from 'next/link'
import { useEffect } from 'react'
import Header from '../components/Layout/Header'

const Post = ({ post }) => {

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [])

  const googleTranslateElementInit = () => {

    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: "en,fr,es", // include this for selected languages
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
      'google_translate_element');

  }
  const router = useRouter();
  // const htmlString = {post.description_front};

  const htmlString = post?.description_front
//  console.log({post.});



  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
  <header className="bgbanner blog_header">
  <Header />
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
          <h2>{post.title}</h2>
        </div>
        <div className="blog_detail">
         
                  
          <div className="product-des" dangerouslySetInnerHTML={{ __html: htmlString }} />

         
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
 const { data } = await Axios.get(`https://lunar-estate.com/serge/admin-panel/api/blogbyids/${params.slug}`);
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