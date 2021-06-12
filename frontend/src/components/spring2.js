import React from 'react';
import { useSpring, animated } from "react-spring";


 export default function Animate2() {

  const fade = useSpring({
    loop: true,
    to : [
      { opacity:1, colour: "#ffaaee"},
      // { opacity: 0, colour: "rgb(14,26,19)"},
    ],
    from: { opacity: 0, color: "goldenrod"},
  
  
   })
 
  
  return (
       <animated style={fade}>
               <h2 className="weeks">It takes 3 to 4 weeks to deliver.</h2>
        
              <h4 className="measure">We take your measurements to make exact size and design..<br/>
              We also have materials Catalog for view to feel the type of materials we use.</h4>
              
        </animated >
    
  
    
  );
 }
