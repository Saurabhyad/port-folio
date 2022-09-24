import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png';
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <div className="f-icon">
            <a href="https://www.instagram.com/saurabh0909yadav/"><Insta color="white" size={"3rem"} /></a>
            <a href="https://m.facebook.com/100038962320546/"><Facebook color="white" size={"3rem"} /></a>
            <a href="https://github.com/Saurabhyad"><Gitub color="white" size={"3rem"} /></a>
            <a href="https://twitter.com/Saurabh74469208"> <Twitter color="white" size={"3rem"} /></a>
            
            </div>
        <div className="thanks">
        <span style={{color:'black',fontSize:'22px'}}>2019meb1293@iitrpr.ac.in</span>
        <br />
        <br />
        <br />
        <br />

        <span style={{color:'black',fontSize:'40px'}}>Thank You </span>
        </div>
         
        </div>
    </div>
     
  )
}

export default Footer