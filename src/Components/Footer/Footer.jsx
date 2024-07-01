import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consectetur, facere hic quae dolorem ab accusantium quisquam, alias illum omnis aperiam consequuntur est minus unde! Facilis, alias. Non officia officiis odit aliquam.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h3>COMPANY</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h3>Get in touch with us.</h3>
                    <ul>
                        <li>1800-1800-0169</li>
                        <li>Dummemail@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">All rights reserved by Tomato© </p>
        </div>
    )
}

export default Footer