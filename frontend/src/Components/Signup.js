import React from 'react';
import './CSS/signup.css';
import Headcomponent from './Headcomponent';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const history = useNavigate() ; 
  const [inputs, setinputs] = useState({email: "" , username :"" , password : ""});
  const change = (e) =>{
    const {name , value} = e.target ; 
    setinputs({...inputs , [name]: value})
  }
  const submit = async(e) =>{
    e.preventDefault() ;
    await axios.post(`${window.location.origin}/user/register`, inputs).then((response)=>{
      console.log(response);
      if(response.data.message === "User already exists"){
        alert(response.data.message);
        setinputs({email: "" , username :"" , password : ""});

      }else{
        // alert(response.data.message);
        history("/signin")
      }

    })
    console.log(inputs);

  }
  return (
    <div className='signup'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 column d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column form-container'>
              <input type="email" className='form-control my-3' placeholder='Enter your email'
               required 
               name='email'
               onChange={change} 
               value={inputs.email}
               />

              <input type="text" className='form-control my-3' 
              placeholder='Enter new Username' 
              required  
              name='username'
              onChange={change}
               value={inputs.username}
               />
              <input type="password" className='form-control my-3' 
              placeholder='Enter new password' 
               name='password'
              onChange={change} 
              value={inputs.password}
              />
              <button className='btn btn-primary btn-signup' onClick={submit}>Sign Up</button>
            </div>
          </div>
          <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center'>
            <Headcomponent first='Sign' second='Up'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
