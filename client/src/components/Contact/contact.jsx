import React from "react";
import "./contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="wrapper" >
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
        <a href='https://www.linkedin.com/in/harsh-tyagi-7b5a9b230/' target='_blank'><LinkedInIcon  className="icon"
        /></a>
          <a href='https://www.instagram.com/harshtyagi8670/' target='_blank'><InstagramIcon  className="icon"/></a>
         <a href="https://twitter.com/tyagi_harsh13" target='_blank'><TwitterIcon  className="icon"/></a>
          <a href="mailto:tyagiharsh079@gmail.com"><EmailIcon className="icon" /></a>
          
          {/* <PinterestIcon /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;