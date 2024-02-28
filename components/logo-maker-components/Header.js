import Image from "next/image";
import Button from "./common/Button";


export default function Header({ handleUndo, handleRedo, isUndoDisabled, isRedoDisabled }) {

  return (
    <div className="header-container">
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',columnGap:'10px'}}>
             <Image src="/images/logoMakerImages/svg/BranderMine_logo.svg" width={150} height={50} />
             <h3>Logo Maker</h3>
          </div>

          {/* <div style={{display:'flex',flexDirection:'row',alignItems:'center',columnGap:'10px'}}>
            <h3 onClick={handleUndo} disabled={isUndoDisabled} style={{ cursor: 'pointer' }}>Undo</h3>
            <h3 onClick={handleRedo} disabled={isRedoDisabled} style={{ cursor: 'pointer' }}>Redo</h3>
            
          </div> */}

          <div className="flex items-center gap-5">
             <buttton className="cursor-pointer">
                All changes saved
             </buttton>

             <buttton className="flex justify-center items-center bg-[#6B42CA] hover:bg-[#9061FF] rounded-xl cursor-pointer" >
               <h3 style={{marginLeft:'20px',marginRight:'20px',color:'white',marginTop:'5px',marginBottom:'5px'}}>Export</h3> 
             </buttton>
          </div>    
    </div>
  )
}
