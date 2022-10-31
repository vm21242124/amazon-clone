import React from 'react'
import './Footer.css'
import logo from '../../img/amazon.png'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer_back">
            <h2 className='navlink'>Back To Top</h2>
        </div>
        <div className="Footer_mid">
            <div className="Footer_options">
                <h4>Get to Know</h4>
                <p>About us</p>
                <p>carriars</p>
                <p>web services</p>
            </div>
            <div className="Footer_options">
                <h4>Connect With us</h4>
                <p>facebook</p>
                <p>instgram</p>
                <p>twitter</p>
            </div>
            <div className="Footer_options">
                <h4>Make money with us</h4>
                <p>sell on amazon</p>
                <p>marketing on amazon</p>
                <p>Affilate program </p>
            </div>
            <div className="Footer_options">
                <h4>About Dev</h4>
      

                <a href="https://github.com/vm21242124" className='navlink'>GitHub</a>
                
                
                <a href='https://linkedin.com/in/vinod-mali-9a2abb230' className='navlink'>LinkdIn</a>

                
            

                <p className='navlink'>vinodrmali01@gmail.com</p>
                
            </div>
            

        </div>
        <div className="Footer_last">
            <img src={logo} alt="" className="header_logo" />
            <h4>Thank You </h4>
        </div>
    </div>
  )
}

export default Footer