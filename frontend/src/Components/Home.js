import React from 'react'
import './CSS/home.css'
const Home = () => {
    return (
        <div className='home d-flex justify-content-center align-items-center'>
            <div className='container  d-flex justify-content-center align-items-center flex-column text-center'>
                <h1>
                Organize your work <br/> & Thoughts</h1> 
                <p>
                    Become focused , Organized and calm with <br />
                    todo App. The world's #1  .
                </p>
                <button className='home-btn'> Make Thoughts & Post Thoughts</button>
            </div>
        </div>
    )
}


export default Home