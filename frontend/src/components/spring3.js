import React, {useEffect} from 'react';
import { useSpring, animated } from "react-spring";




export default function BackwardsCompatability() {
  const [styles, api] = useSpring(() => ({
    from: { x: -50, opacity: 1 },
  }))

  useEffect(() => {
    api({
      x: 50,
      opacity: 1,
      loop: { reverse: true },
    })
  }, [])

  return (
    <animated.div
      style={{
        width: 150,
        height: 80,
        backgroundColor: 'goldenrod',
        borderRadius: 16,
        ...styles,
      }}
    />
  
  )
}