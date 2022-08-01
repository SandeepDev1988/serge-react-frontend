import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";
import Moment from 'moment';

class Trending extends React.Component {
	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://lunar-estate.com/serge/admin-panel/api/blogs',
		)
		  .then(res => {
			const trending = res.data;
			this.setState({ trending });
		  })
	  }

	render() {

	  return (
		  <section className="article-main pt-0 bg pad80 line">
			<img src='img/graphic2.png' className='graphic2' />

<div className="container">
<div className='row'>
					<div className='col-6'>
					<h2 className="bigheading ">
					My Articles
        		<img src="img/heading-line.png" />
				
      		</h2>
					</div>
					<div className='col-6 text-right'>
					<Link href="/AllBlogs">
					 <a className="view-all "> View all</a>
					 </Link>

						</div>
				</div>

<div className="row pt-5">


{this.state.trending.map((post, index) => {
//const encodedData = atob(post.description);
//console.log('value is '+encodedData);

 //const innerHTML = post.description;
 
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
			<div className="col-md-4 col-sm-12 col-lg-4 mt10">
			<div className="article">
			<img src={post.image} />
			<div className="article-text">
			<Link href={`/blog/${post.slug}`}>
			<a className="rdmre-btn">
			<h3>{post.title}</h3></a>
			</Link>
			<p> {Moment(dt).format('d MMM YYYY')} </p>
				
			
			
			<Link href={`/blog/${post.slug}`}>
                <a className="rdmre-btn"> Read More</a>
              </Link>







			</div>
			</div>
			</div>
		</>
	 )
 })}    

</div>
<div className='all_blogs text-center mt-3'>
 	
</div>
</div>
</section>

	  );
	}
  }

  export default Trending;
  

