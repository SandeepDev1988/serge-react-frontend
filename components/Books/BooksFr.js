import React from 'react';
import axios from 'axios';
import Image from 'next/image'
import nextBase64 from 'next-base64';
//import ReactHtmlParser from "react-html-parser"
import Link from "next/link";


class Books extends React.Component {
	state = {
		books: []
	  }

	componentDidMount() {
		axios.get('https://lunar-estate.com/serge/admin-panel/api/books',
		)
		  .then(res => {
			const books = res.data;
			this.setState({ books });
		  })
	  }

	render() {

	  return (
		<>

		   <section className="book-sec bg pad80 pt-0 line">
    		<div className="container" data-aos="fade-up" data-aos-duration="900">
				<div className='row'>
					<div className='col-9'>
					<h2 className="bigheading ">
        		Mes sélections de livres
        		<img src="img/heading-line.png" />
				
      		</h2>
					</div>
					<div className='col-3 text-right '>
					<Link href="/AllBooks">
	 					<a className="view-all "> Voir tout</a>
	 				</Link>
					<img className='graphic_image' src='img/graphic.png' />
						</div>
				</div>
      		
      
      <div className="row pt-5">
      
	  	{this.state.books.map((post, index) => {

				if (post.link)
				return (
					<>
					<div className={`col-md-3 col-6 ${index % 2 === 0 ? 'mb20' : '' } forbcol`}>
						<div className="bookimg">
							<Link href={post.link} key={index}>
								<a><img  src={post.image} /> </a>
								
							</Link>
							{
					            post?.titlefr?.length > 0 ?
					            <h2>{post.titlefr}</h2>
					          
					          :
					              <h2>{post.title}</h2>
					          }	
							

							{
					            post?.descriptionfr?.length > 0 ?
					           <p>{post.descriptionfr}</p>
					          
					          :
					             <p>{post.description}</p>
					          }
							
						</div>
					</div>	
					</>
				);
				return <>
				 <div className={`col-md-3 col-6 ${index % 2 === 0 ? 'mb20' : '' } forbcol`}>
				<div className="bookimg">
					<a>
					<img  src={post.image} /></a>
					{
					            post?.titlefr?.length > 0 ?
					            <h2>{post.titlefr}</h2>
					          
					          :
					              <h2>{post.title}</h2>
					          }	
							{
					            post?.descriptionfr?.length > 0 ?
					           <p>{post.descriptionfr}</p>
					          
					          :
					             <p>{post.description}</p>
					          }
				</div>
			</div>
			</>
         })}



      </div>
    </div>
  </section>
  
</>
	  );
	}
  }

  export default Books;
  

