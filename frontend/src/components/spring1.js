import React from 'react';
import { useSpring, animated } from "react-spring";

export default function Animate() {

  const fade = useSpring({
    loop: true,
    to : [
      { opacity:1, colour: "#ffaaee"},
      // { opacity: 0, colour: "rgb(14,26,19)"},
    ],
    from: { opacity: 0, color: "black"},
  
  
   })
  return (
       <animated.div style={fade}>
             <div className="handmade">
               <h1>Home of Handmade Luxury male and female Suits, Handmade pure leather Bags and Shoes.<br/>
        
              We make varieties of African clothes for male, females and couples..</h1>
            </div>  
              
        </animated.div >
    
  
    
  );
}
