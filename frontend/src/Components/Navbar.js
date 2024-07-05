import React from 'react'
import pp from '../assets/pp.svg';
import { GiWhiteBook } from 'react-icons/gi';
import './CSS/nav.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../Store';
const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch() ; 
  const logout = async() => {
    let id = sessionStorage.getItem("id");
    console.log(id);
    console.log("Logged Out");
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  }
  return (

    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container">
          <Link className="navbar-brand " to="/" style={{ fontWeight: "700", color: "red" }}>
            <GiWhiteBook /> &nbsp;
            SYTH</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link active  " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active " aria-current="page" to="/about">About Us</Link>
              </li>
              <li className="nav-item  mx-3">
                <Link className="nav-link active " aria-current="page" to="/todo">Your Thoughts</Link>
              </li>
              {!isLoggedIn && <>
                <li className="nav-item mx-2">
                  <Link className="nav-link active btn-nav m-1 p-2" aria-current="page" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link active btn-nav m-1 p-2" aria-current="page" to="/signin">Sign In</Link>
                </li>

              </>}
              {isLoggedIn && <>
                <li className="nav-item mx-2" onClick={logout} >
                  <Link className="nav-link active btn-nav" aria-current="page" to="/" > Log Out</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active btn" aria-current="page" to="#">
                    <img src={pp} alt="" style={{ height: "30px", width: "30px" }} />
                  </Link>
                </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar