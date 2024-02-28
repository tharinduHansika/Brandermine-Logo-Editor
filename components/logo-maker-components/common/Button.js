import React from 'react'

export default function Button(props) {
    const buttonStyle = {
        backgroundColor: 'red',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        borderRadius: '10px',
        cursor: 'pointer'
      };
  return (
    <buttton className="bg-[#6B42CA] hover:bg-[#9061FF] text-white py-2 px-4 rounded cursor-pointer">
         {props.title}
    </buttton>
  )
}
