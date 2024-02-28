import React from 'react'

export default function SlideContainer(props) {
  return (
    <div style={{position:'absolute',height:'92vh',width:'100%',top:"-10px",margin:'auto',right:'100%',backgroundColor:'white'}}     className={`transition-transform duration-500 ease-in-out ${
        props.translate ? "transform translate-x-full" : ""
      }`}>
         {props.children}
      </div>
  )
}
