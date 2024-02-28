import React from 'react'

export default function RowContainer(props) {
  return (
    <div style={{display:'flex',flexDirection:'row',margin:'10px',justifyContent:'space-around'}}>
       {props.children}
    </div>
  )
}
