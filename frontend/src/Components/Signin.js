import React, { useState } from 'react'
import Headcomponent from './Headcomponent'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../Store/';
const Signin = () => {
  const [inputs, setinputs] = useState({ email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setinputs({ ...inputs, [name]: value });

  }
  const dispatch = useDispatch() ; 
  const history = useNavigate() ; 
  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`${window.location.origin}/user/signin`  , {email : inputs.email , password : inputs.password}).then(
      (response) => {
        console.log("Logged in ");
        console.log(response.data._id);
        // console.log(response.data._id);
        sessionStorage.setItem("id" , response.data._id);
        dispatch(authActions.login());
        history('/thought')
        setinputs({ email: "", password: "" })
      }
    );
    // console.log(inputs);
  }
  return (
    <div>
      <div className='signup'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center'>
              <Headcomponent first='Sign' second='In' />
            </div>
            <div className='col-lg-8 column d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column form-container'>
                <input type="email" className='form-control my-3' placeholder='Enter your email' name='email' onChange={change} value={inputs.email} required />
                <input type="password" className='form-control my-3' placeholder='Enter new password' name='password' onChange={change} value={inputs.password} required />
                <button className='btn btn-primary btn-signup' onClick={submit}>Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin