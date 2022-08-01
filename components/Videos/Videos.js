import React from 'react';
import axios from 'axios';
import Image from 'next/image'
import Link from "next/link";
import YouTube from "react-youtube";

class Videos extends React.Component {

    

	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://lunar-estate.com/serge/admin-panel/api/getallvideos/3',
		)
		  .then(res => {
			const trending = res.data;
			this.setState({ trending });
		  })
	  }

	render() {
        const opts = {
            height: "500",
            width: "560",
            frameBorder: "0",
            title : "YouTube video player",
            playerVars: {
              autoplay: 1,
            },
          };
	  return (
		      <section id="video_section">
                    <img src='img/graphic2.png' className='graphic2' data-aos="zoom-in" data-aos-delay="900" />

        <div className='container'>
          <div className='row' data-aos-delay="500" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="900">
            <div className='col-6'>
              <h2 className="bigheading ">
                Videos
                <img src="img/heading-line.png" />

              </h2>
            </div>
            <div className='col-6 text-right '>
              <Link href="/AllVideos">
	 <a className="view-all "> View all</a>
	 </Link>
            </div>
          </div>
          <div className='row mt-5 pt-5'>
            
            {this.state.trending.map((post, index) => {

            	return (
					<>
            			<div className='col-lg-12 col-md-12 col-12'>
               
              				<div className='video-conteiner'>
                				<YouTube videoId={post.VideoId} 
            					opts={opts} />
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

  export default Videos;
  

