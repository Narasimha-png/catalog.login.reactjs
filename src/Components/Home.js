import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Home.css" ;
import bitcoin from "../Assets/bitcoin.png" ;


const Home = () =>{
   return (
    <MainHeading />
   )
}
const Growth = ()=>(
    <svg className="growth-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path   fill="currentColor" d="M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z"/>
 
    </svg>
)

const Bitcoin = ()=>(
    <svg  className="growth-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 256"><defs><linearGradient id="logosBitcoin0" x1="49.973%" x2="49.973%" y1="-.024%" y2="99.99%"><stop offset="0%" stop-color="#F9AA4B"/>
    <stop offset="100%" stop-color="#F7931A"/></linearGradient></defs>
    <path fill="url(#logosBitcoin0)" d="M252.171 158.954c-17.102 68.608-86.613 110.314-155.123 93.211c-68.61-17.102-110.316-86.61-93.213-155.119C20.937 28.438 90.347-13.268 158.957 3.835c68.51 17.002 110.317 86.51 93.214 155.119Z"/>
    <path fill="#FFF" d="M188.945 112.05c2.5-17-10.4-26.2-28.2-32.3l5.8-23.1l-14-3.5l-5.6 22.5c-3.7-.9-7.5-1.8-11.3-2.6l5.6-22.6l-14-3.5l-5.7 23c-3.1-.7-6.1-1.4-9-2.1v-.1l-19.4-4.8l-3.7 15s10.4 2.4 10.2 2.5c5.7 1.4 6.7 5.2 6.5 8.2l-6.6 26.3c.4.1.9.2 1.5.5c-.5-.1-1-.2-1.5-.4l-9.2 36.8c-.7 1.7-2.5 4.3-6.4 3.3c.1.2-10.2-2.5-10.2-2.5l-7 16.1l18.3 4.6c3.4.9 6.7 1.7 10 2.6l-5.8 23.3l14 3.5l5.8-23.1c3.8 1 7.6 2 11.2 2.9l-5.7 23l14 3.5l5.8-23.3c24 4.5 42 2.7 49.5-19c6.1-17.4-.3-27.5-12.9-34.1c9.3-2.1 16.2-8.2 18-20.6Zm-32.1 45c-4.3 17.4-33.7 8-43.2 5.6l7.7-30.9c9.5 2.4 40.1 7.1 35.5 25.3Zm4.4-45.3c-4 15.9-28.4 7.8-36.3 5.8l7-28c7.9 2 33.4 5.7 29.3 22.2Z"/>
    </svg>
)
const MainHeading = () =>(
        <div className="container">
      <div className="text-container">
      <p className="static-text">Use Your <span className="imp-text">BitCoin</span>  </p>
      
      <p className="static-text ">At its <span className="imp-text">Fullest Potentia</span>  <Growth /></p>
    
      <div className="dynamic-text-container">  
        <p className="static-text">We ,</p>
        <ul className="dynamic-text">
          <li className="item">Trade</li>
          <li className="item">Swap</li>
          <li className="item">Payment</li>
          <li className="item">DeFi</li>
          <li className="item"></li>
        </ul>
        <p className="static-text"> {" "} Your <Bitcoin /> </p>

        </div>
      </div>
    </div>
       
)


export default Home;