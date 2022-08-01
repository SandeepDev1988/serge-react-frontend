import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";
import YouTube from "react-youtube";

class Blogs extends React.Component {
	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://lunar-estate.com/serge/admin-panel/api/getallvideos',
		)
		  .then(res => {
			const trending = res.data;
			this.setState({ trending });
		  })
	  }

	render() {
	const opts = {
            height: "315",
            width: "560",
            frameBorder: "0",
            title : "YouTube video player",
            playerVars: {
              autoplay: 0,
            },
          };



	  return (
		  <section className="article-main pt-0 bg  line  videos_page">
<div className="container">
<h2 className="bigheading text-center mt-5">All Videos

<img src="img/heading-line.png" /></h2>
<div className="row pt-5">


{this.state.trending.map((post, index) => {



return (
	<>
			<div className="col-md-4 col-sm-12 col-lg-4 mt10">
			<div className="article">
			
			<div className="article-text">
			
			<YouTube videoId={post.VideoId} 
            					opts={opts} />
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

  export default Blogs;
  

