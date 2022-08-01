import React from 'react';
import axios from 'axios';
import Image from 'next/image'
// import nextBase64 from 'next-base64';
//import ReactHtmlParser from "react-html-parser"
import Link from "next/link";
import Moment from 'moment';

class LatestBlogs extends React.Component {
	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://lunar-estate.com/serge/admin-panel/api/blogs/10',
		)
		  .then(res => {
			const trending = res.data;
			this.setState({ trending });
		  })
	  }

	render() {

	  return (
		<>
		<aside>
		<div className="latest_blog_sidebar">
		<h2>Latest blogs
<img src="../img/heading-line.png" /> </h2>
		  

{this.state.trending.map((post, index) => {
 
 /*const date = new Date(post.CreatedAt);
 const formattedDate = date.toLocaleDateString("en-GB", {
	day: "numeric",
	month: "long",
	year: "numeric",
	hour : "numeric",
	minute : "numeric",
	second : "numeric"
  })*/
	Moment.locale('en');
    var dt = post.CreatedAt;




 return (
 <>
				<div className="blogs">
				<div className="image-blog">
				<img src={post.image} />
				</div>
				<div className="blog-detail-siebar">
				<h2>
					
					<Link
              href={`/es/${post.slug}`}

            >
              <a> {post.title}</a>
            
			
			</Link>





					
					</h2>
				<span>{Moment(dt).format('d MMM YYYY')} </span>
				</div>
			</div>
			</>
	 )
 })}


		</div>
          </aside>
</>
	  );
	}
  }

  export default LatestBlogs;
  

