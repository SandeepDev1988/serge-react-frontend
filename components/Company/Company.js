import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";


class Company extends React.Component {
	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://lunar-estate.com/serge/admin-panel/api/companies/3',
		)
		  .then(res => {
			const trending = res.data;
			this.setState({ trending });
		  })
	  }

	render() {

	  return (
		<>
	  	<section className="compny-sec pad80 bg pt-0 line" id='company'>
        <div className="container">
          <h2 className="bigheading text-center " data-aos="fade-up" data-aos-duration="900">
            My Companies
            <img src='img/heading-line.png' />
          </h2>
          <div className="row pt-5">

            <div className="col-md-12 col-sm-12 col-lg-12  coimg-col ">
				<div className='row'>
							
					{this.state.trending.map((post, index) => {
							{post.link}
							if (post.link)
							return (
							<>	
							<div className="col-md-6 col-12 mb-4" >
			                  <div className='companys-logo'>
								
			                  
			                  <Link href={post.link} key={index}>
								<a target="blank"><img  src={post.image} /> </a>
								
							</Link>


			                  </div>
			                </div>
							
							</>
	               		);
	               		return <>
	               					<div className="col-md-4 col-12 mb-4" >
			                  		<div className='companys-logo'>
								<Link href="#" key={index}>
									<img id="one" src={post.image} /> 
								</Link>



			                  </div>
			                </div>
	               			</>

			               })}  


				</div>
              {/* <div className="row inner-row">
                
              	{this.state.trending.map((post, index) => {

              	return (<>		
			                <div className="col-md-2 col-6 mb-3" >
			                  <div className='companys-logo'>
			                    <img src={post.image} />
			                  </div>
			                </div>
							</>
	               		)
                 })}

              


              </div> */}

            </div>
          </div>
        </div>
      </section>
</>
	  );
	}
  }

  export default Company;
  

