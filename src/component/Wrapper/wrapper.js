import React, { Component } from 'react';
import WrapperItems from './wrapper-items'
import './wrapper.css'

class Wrapper extends Component {
   
    render() { 
        return (
    <div>   
         <div className="banner-area">
            <WrapperItems titleclass="banner1" src="./images/covid3.jpg" subclass="text-box text-box1"
                headline="Covid-19 Instructions" para="Wear a mask that covers your nose and mouth to help protect yourself and others."
             />-

            <WrapperItems titleclass="banner2" src="./images/covid8.jpg" subclass="text-box text-box2"
                headline="Covid-19 Instructions" para="Avoid crowds and poorly ventilated indoor spaces."
             />

            <WrapperItems titleclass="banner3" src="./images/covid7.jpg" subclass="text-box text-box3"
                headline="Covid-19 Instructions" para="Get a COVID-19 vaccine when it is available to you."
             />

            <WrapperItems titleclass="banner4" src="./images/covid6.jpg" subclass="text-box text-box4"
                headline="Covid-19 Instructions" para="Wash your hands often with soap and water. Use hand sanitizer if soap and water aren’t available."
             />
          </div>   


    
     
    
    </div>        

         );
    }
}
 
export default Wrapper;


   