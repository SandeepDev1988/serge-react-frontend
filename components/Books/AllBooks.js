import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";


class AllBooks extends React.Component {
	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://lunar-estate.com/serge/admin-panel/api/books/4',
		)
		  .then(res => {
			const trending = res.data;
			this.setState({ trending });
		  })
	  }

	render() {

	  return (
		  <section className="article-main pt-0 bg  line allbooks_page">
<div className="container">
<h2 className="bigheading text-center mt-5">All Books

<img src="img/heading-line.png" /></h2>
<div className="row pt-5">


{this.state.trending.map((post, index) => {
//const encodedData = atob(post.description);
//console.log('value is '+encodedData);

 //const innerHTML = post.description;
 if (post.link)
				return (
					<>
					<div className={`col-md-3 col-6 ${index % 2 === 0 ? 'mb20' : '' } forbcol`}>
						<div className="bookimg">
							<Link href={post.link} key={index}>
								<a><img  src={post.image} /> </a>
								
							</Link>
							<h2>{post.title}</h2>
							<p>{post.description}</p>
							
						</div>
					</div>	
					</>
				);
				return <>
				 <div className={`col-md-3 col-6 ${index % 2 === 0 ? 'mb20' : '' } forbcol`}>
				<div className="bookimg">
					<a>
					<img  src={post.image} /></a>
					<h2>{post.title}</h2>
							<p>{post.description}</p>
				</div>
			</div>
			</>

// return (
// 	<>
// 			<div className="col-md-3 col-sm-12 col-lg-3 mt10">
// 			<div className="article">
// 			<img src={post.image} />
// 			<div className="article-text">
// 			<h3>{post.title}</h3>
// 			<p>{post.description}</p>
				
			
// 			</div>
// 			</div>
// 			</div>
// 		</>
// 	 )
 })}

</div>

</div>
</section>


	  );
	}
  }

  export default AllBooks;
  

