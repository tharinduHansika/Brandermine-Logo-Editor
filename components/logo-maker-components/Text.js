import Image from 'next/image'
import React,{useState} from 'react'
import OptionModal from './common/OptionModal'
import ManageText from './ManageText'
import ManageTextSlogan from './ManageTextSlogan'

const textSections = [
      "Business Name","Slogan Name"
]

export default function Text() {
    const [hover, setHover] = useState(false)
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({top:0,left:0})
    const [manageTextVisible, setManageTextVisible] = useState(false)
    const [move, setMove] = useState(false);
    const [sloganMove, setSloganMove] = useState(false);


    const handleButtonClick = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`Button clicked at position: left: ${x}px, top: ${y}px`);
        setPosition({top:y-200,left:x-250})
        setVisible(prev => !prev)
      }

    const handleManageText = (data) =>{
            // setManageTextVisible(prev => !prev)
            //setMove(prev => !prev)

            if(data == 'Business Name'){
              setMove(prev => !prev)
            }else{
              setSloganMove(prev => !prev)
            }
    }

  return (
    <div style={{position:'relative'}}>
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px',alignItems:'center'}}>
           <h2 style={{fontSize:'16px',fontWeight:'500'}}>Manage Text</h2>
           {/* <button style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',width:'70px',height:'28px',border:'2px solid #6B42CAB2',borderRadius:'8px',columnGap:'5px',borderColor:'#6B42CACC',backgroundColor:hover ? "#6B42CA" : ""}}
                  onMouseEnter={() => {setHover(true)}}
                  onMouseLeave={() => {setHover(false)}}
                  onClick={()=>{}}>
               <Image src={`/images/logoMakerImages/svg/button/${hover ? "2.svg": "1.svg" }`} width={10} height={10}/>
               <h2 style={{fontSize:'14px',color:hover ? '#FFFFFF': '#6B42CAF2'}}>Add</h2>
           </button> */}
       </div>
       <div style={{margin:'10px'}}>
              <p> Add and Customized Edit text, font, and colors to match your name with your brand's style.</p>
       </div>
       <hr/>
       <div style={{margin:'10px',position:'relative'}}>

                   {
                        textSections.map((data,index)=>{
                            return(
                                <div key={index} style={{width:'100%',height:'120px',border:'2px solid #6B42CAB2',borderRadius:'10px',marginBottom:'15px'}} className='hover:bg-[#DFDFDF]'>
                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'10px'}}>
                                        <h3>{data}</h3>
                                        <div  onClick={handleButtonClick}  style={{display:'flex',justifyContent:'center',alignItems:'center',width:'22px',height:'22px',border:'1px solid #DFDFDF',borderRadius:'100%',cursor:'pointer',position:'relative'}} className='hover:bg-[#6b42cae1] bg-[#6B42CAB2]'>
                                                <Image src="/images/logoMakerImages/svg/button/3.svg" width={10} height={10}/>

                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'15px'}}>
                                        <button  style={{display:'flex',justifyContent:'center',paddingLeft:'45px',paddingRight:'45px',paddingTop:'4px',paddingBottom:'4px',borderRadius:'20px',flexWrap:'wrap' }} className="hover:bg-[#6B42CA] text-purple-700 hover:text-white py-2 px-4 border border-purple-700" 
                                        // onClick={handleManageText(data)}
                                        onClick={() => handleManageText(data)}
                                        >
                                                    {data}
                                        </button>
                                    </div>
                               </div>
                            )
                        })
                      }

              {visible && <OptionModal left={position.left} top={position.top} /> }
       </div>
       <ManageText  translate={move} onClick={()=>{ setMove(prev => !prev)}} >
       </ManageText>

       <ManageTextSlogan translate={sloganMove} onClick={()=>{ setSloganMove(prev => !prev)}}>
       </ManageTextSlogan>
    </div>
  )
}
