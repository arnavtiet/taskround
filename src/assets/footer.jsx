import React from "react";
import {BsInstagram} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

import './footer.css'


const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p >Copyright &copy; 2023 </p> 
        
        <p>JOIN US AT <a href="https://www.instagram.com/" className="icons"><BsInstagram/></a> 
        <a href="https://github.com/arnavtiet" className="icons"><BsGithub/></a>
        <a href="https://twitter.com/i/flow/login" className="icons"><BsTwitter/></a></p>
        <p>Terms and Conditions </p>
        
        
        
        </div>
      

     
    </footer>
  );
};

export default Footer;