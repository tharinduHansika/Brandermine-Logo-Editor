import React from 'react'
import Image from 'next/image'

export default function OptionModal(props) {
  return (
    <div style={{position:'absolute',border:'2px solid red',borderRadius:'10px' ,width:'160px',height:'130px',top:props.top,left:props.left,backgroundColor:'white'}}>
          <div style={{}}>
                <div>
                   <Image src="/images/logoMakerImages/svg/option/1.svg" width={10} height={10} />    
                </div>
                <div>
                      
                </div>
                <div>

                </div>
          </div>
    </div>
  )
}
