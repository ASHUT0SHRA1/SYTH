import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import UpdateTodo from './Components/Update';
import { useDispatch } from 'react-redux';
import { authActions } from './Store';
import { useEffect } from 'react';
import Thought from './Components/Thought';


function App() {
  const dispatch = useDispatch() ; 
  useEffect(() => {
    const Id = sessionStorage.getItem("id");
    if(Id){
      dispatch(authActions.login());
    }
  }, []);
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/thought' element={<Thought />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/update' element={<UpdateTodo />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
