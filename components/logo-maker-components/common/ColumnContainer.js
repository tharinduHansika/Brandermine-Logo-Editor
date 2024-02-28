import React from 'react'

export default function ColumnContainer(props) {
  return (
    <div style={{display:'flex',flexDirection:'column',margin:'10px'}}>
        {props.children}
    </div>
  )
}
