import React from 'react'
import './style.css'

const Home = () => {
  return (
    <div className='header'>
      {/* <div className="header-background"></div> */}
      <div className="container">
        <div className="header-main">
          <div className='header-main-item'>
            <h1>Let's Started</h1>
            <h2>Learning Skills & Upgrade Your Life</h2>
            <div className='header-features'>
              <div className='header-features-item'><i className="fa-solid fa-circle-dot"></i><p>Experts Advisors</p></div>
              <div className='header-features-item'><i className="fa-solid fa-circle-dot"></i><p>Experts Advisors</p></div>
              <div className='header-features-item'><i className="fa-solid fa-circle-dot"></i><p>Experts Advisors</p></div>
            </div>
            <div className='header-buttons'>
              <button className='header-btn blue'>GET STARTED</button>
              <button className='header-btn'>OUR COURSES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home