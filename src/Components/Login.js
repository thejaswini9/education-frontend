import React, { useState } from 'react';
import {useNavigate,Link} from "react-router-dom" ;
import axios from "axios" ;

function Login() {
   const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (email !== '' && password !== '') {
      // Send login data to the server here
      const body ={
        "email": email,
        "password": password 
    }

      try {
        const response = await axios.post("http://localhost:3007/signin", body);
        console.log(response);
        if (response.status === 200) {
          alert('Login successful');
          navigate('/allvideos');
        } else {
          alert('Invalid email or password. Please try again.');
        }
      } catch (error) {
        console.log(error);
        alert('Error occurred during login. Please try again.');  
      }
    }
  }; 

  
  return ( 
   
    <div className='bg-cont'>
        <div style={{padding:110}} className="d-flex flex-row justify-content-center">
          <div className="form-container">
              <center className="middle">Login Here</center>
            <form className="form" onSubmit={handleSubmit}> 
          
            <label>Email</label> 
            <input type="email" className="input" placeholder="Enter Your Email" value={email} required onChange={(e) => { handleEmailChange(e) }}  />
            <label>Password</label>
            <input type="password" className="input" placeholder="Password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /> 
            <center> <button  >Login</button></center> 

            <span style={{paddingBottom:55, paddingTop:25}} >Don't Have An Account? 
                                  <Link to='/signup'>
                    <span style={{color:'#0D6EFD'}} > Sign Up</span></Link>
                                    
            </span>
        </form>
        </div>
        </div>
    </div>
  );
}

export default Login;