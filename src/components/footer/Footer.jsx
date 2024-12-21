import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer-main">
          <div className="footer-main-item">
            <h2>GET IN TOUCH!</h2>
            <p>Fusce varius, dolor tempor <br /> interdum tristiquei <br /> bibendum menar beson.</p>
            <p>Toll Free Customer Care <br /> +(1) 123 456 7890</p>
          </div>
          <div className="footer-main-item">
            <h2>COMPANY</h2>
            <p className='footer-main-item-link'>
              <i class="fa-solid fa-arrow-right-long"></i>
              About Us</p>
            <p className='footer-main-item-link'>
              <i class="fa-solid fa-arrow-right-long"></i>
              Resource Center</p>
            <p className='footer-main-item-link'>
              <i class="fa-solid fa-arrow-right-long"></i>
              Careers</p>
            <p className='footer-main-item-link'>
              <i class="fa-solid fa-arrow-right-long"></i>
              Instructor</p>
            <p className='footer-main-item-link'>
              <i class="fa-solid fa-arrow-right-long"></i>
              Become A Teacher</p>
          </div>
          <div className="footer-main-item">
            <h2>COURSES</h2>
            <p className='footer-main-item-link'>
            <i class="fa-solid fa-arrow-right-long"></i>
            Development</p>
            <p className='footer-main-item-link'>
            <i class="fa-solid fa-arrow-right-long"></i>
              Web design</p>
            <p className='footer-main-item-link'>
            <i class="fa-solid fa-arrow-right-long"></i>
              SEO Optimize</p>
            <p className='footer-main-item-link'>
            <i class="fa-solid fa-arrow-right-long"></i>
              Marketing</p>
            <p className='footer-main-item-link'>
            <i class="fa-solid fa-arrow-right-long"></i>
              Technology</p>
          </div>
          <div className="footer-main-item">
            <h2>RECENT POSTS</h2>
            <div>
              <b>Mission critical action <br /> life items rather</b>
              <p><i class="fa-regular fa-clock-three"></i>23th  April, 2024</p>
            </div>
            <div>
              <b>Mission critical action <br /> life items rather</b>
              <p><i class="fa-regular fa-clock-three"></i>15th  October, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer