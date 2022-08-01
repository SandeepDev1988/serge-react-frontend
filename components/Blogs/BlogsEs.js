import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";
import Moment from 'moment';

class BlogsFr extends React.Component {
	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://lunar-estate.com/serge/admin-panel/api/allblogs',
		)
		  .then(res => {
			const trending = res.data;
			this.setState({ trending });
		  })
	  }

	render() {

	  return (
		  <section className="article-main pt-0 bg  line">
<div className="container">
<h2 className="bigheading text-center mt-5">Todos los blogs

<img src="img/heading-line.png" /></h2>
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

 const title = post?.title
  const titlesp = post?.titlesp


Moment.locale('en');
    var dt = post.CreatedAt;

return (
	<>
			<div className="col-md-3 col-sm-12 col-lg-3 mt10">
			<div className="article">
			<img src={post.image} />
			<div className="article-text">
			<h3><Link href={`/es/${post.slug}`}>
			<a className="rdmre-btn">
			
			{
            post?.titlesp?.length > 0 ?
            <h3>{post.titlesp}</h3>
          
          :
              <h3>{post.title}</h3>
          }




			</a>
			

			</Link></h3>
			





			<p> {Moment(dt).format('d MMM YYYY')} </p>
				
			<Link href={`/es/${post.slug}`}>
                <a className="rdmre-btn"> Read More</a>
              </Link>
			

			










			</div>
			</div>
			</div>
		</>
	 )
 })}

</div>

</div>
</section>

	  );
	}
  }

  export default BlogsFr;
  

