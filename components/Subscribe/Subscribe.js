import React, { useEffect, useState } from "react";
// import FlashMessage from "react-flash-message";

const Subscribe = () => {
 const [email, setEmail] = useState('');
 const [error, setError] = useState('');
 const [success, setSuccess] = useState('');

const subscribeMe = async (event) => {
			
			console.log('data is '+email);	
			const emails = email;
			console.log('emails id is '+emails);	
			
			event.preventDefault();
			event.target.reset();
			const res = await fetch('https://lunar-estate.com/serge/admin-panel/Api/subscribe?email='+emails);
			
			const data = await res.json();
			const status = data["status"];
			const message = data["msg"];
			//console.log('result is '+error);
			//console.log('message is '+message);
			if (status === "false") {
				console.log(error);
				setError(error);
			  } else {
				console.log(message);
				setSuccess(message);
			  }


			//  if (error) {
            //          const error='errror';
            //          setError(error);
            //  } else {
			// 	 	const message='Om Success';
	        //      	console.log(message);
            //          setSuccess(message);
            //  }
};
	const changeEmail = (event) => {
 		const email = event.target.value;
 		setEmail(email);
	}
   return (
    
    			<div className="container">
		      	<div className="row">
		        <div className="col-md-7 col-sm-12 col-lg-7 ft-img">
		          <img src="img/xchanger.png" />
		        </div>
		        <div className="col-md-5 col-sm-12 col-lg-5 ft-form">
		          <form className="row g-3" onSubmit={subscribeMe}>
		            <div className="col-12">
             

			<input  className="form-control" id="subscribe2" name="email" type="email" placeholder="Please Subscribe" onChange={changeEmail}
              />
              <button type="submit" className="btn btn-primary mb-3">subscribe</button>
			  </div>
				{success 
				    ? 
					 <div className="alert alert-success">
            				<strong>{success}</strong>
				    	</div> 
				       : 
				    <span className="flex items-center text-sm font-bold text-red-800">
				    
				          {error} 
				    </span>
				}

          </form>
        </div>
      </div>
    </div>
     
   )
}
export default Subscribe