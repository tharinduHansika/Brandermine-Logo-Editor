import Image from 'next/image'
import React,{useState} from 'react'
import SlideContainer from './common/SlideContainer'
import ColumnContainer from './common/ColumnContainer'
import RowContainer from './common/RowContainer'
import ColorComponent from './common/ColorComponent'
import ChangeFont from './ChangeFont'
import { useSelector, useDispatch } from 'react-redux';
import { setLogoTextBusinessNameEditText,
         setLogoTextBusinessNameFontSize, 
         setLogoTextBusinessNameLetterSpacing,
         setLogoTextBusinessNameRotate,
         setLogoTextBusinessNameCurve,
         setLogoTextBusinessNameAlignment,
         setLogoTextBusinessNameTextColor,
         setLogoTextBusinessNameTextOpacity,      
} from '../../store/slice/logoTextSlice';
import { addStep } from './../../store/slice/undoRedoSlice';


const alignments = [
    "/images/logoMakerImages/svg/alignment/1.svg",
    "/images/logoMakerImages/svg/alignment/2.svg",
    "/images/logoMakerImages/svg/alignment/3.svg"
]


export default function ManageText(props) {
    const[hover,setHover] = useState()
    const[visible,setVisible] = useState(false)
    const[alimentIndex,setAlimentIndex] = useState(0)
    const[alimentType,setAlimentType] = useState(null)
    const [clickCount, setClickCount] = useState(0);
    const [move, setMove] = useState(false);

    const dispatch = useDispatch();


    const changeFontEvent = async () => {
        console.log("button triggered");

        // setManageTextVisible(prev => !prev)
        setMove(prev => !prev)
    };

    const handleBusinessNameInput = (text) => {
        const BusinessName = text.target.value;
        // Log the typed text to the console
        console.log('typed text:', BusinessName);
        dispatch(setLogoTextBusinessNameEditText(BusinessName));

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_TEXT', payload: BusinessName }));
    };

    const handleFontSize = (size) => {
        const fontSize = size.target.value;
        // Log the font size to the console
        console.log('font size:', fontSize);
        dispatch(setLogoTextBusinessNameFontSize(fontSize));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_FONT_SIZE', payload: fontSize }));
    };

    const handleFontSizeMouseOut = (event) => {
        const fontSize = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Font Size:', fontSize);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_FONT_SIZE', payload: fontSize }));
    };

    const handleLetterSpacing = (spacing) => {
        const letterSpacing = spacing.target.value;
        // Log the Letter Spacing to the console
        console.log('Letter Spacing:', letterSpacing);
        dispatch(setLogoTextBusinessNameLetterSpacing(letterSpacing));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_LETTER_SPACING', payload: letterSpacing }));
    };

    const handleLetterSpacingMouseOut = (event) => {
        const letterSpacing = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Letter Spacing:', letterSpacing);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_LETTER_SPACING', payload: letterSpacing }));
    };

    const handleRotate = (rota) => {
        const rotate = rota.target.value;
        // Log the rotate to the console
        console.log('Rotate:', rotate);
        dispatch(setLogoTextBusinessNameRotate(rotate));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_ROTATE', payload: rotate }));
    };
    
    const handleRotateMouseOut = (event) => {
        const rotate = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released rotate:', rotate);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_ROTATE', payload: rotate }));
    };

    const handleAlignment = (algmn) => {
        
        if (algmn == 0) {
            setAlimentType('end');
        } else if (algmn == 1) {
            setAlimentType('middle');
        } else if (algmn == 2) {
            setAlimentType('start');
        }

        //log the selected alignment
        console.log('Selected alignment type:', alimentType);
        dispatch(setLogoTextBusinessNameAlignment(alimentType));

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_ALIGNMENT', payload: alimentType }));
    };

    const handleColorChange = (color) => {
        // Log the selected color to the console
        console.log('Selected Color:', color);
        dispatch(setLogoTextBusinessNameTextColor(color));

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_COLOR', payload: color }));
    };

    const handleOpacityChange = (event) => {
        const opacity = event.target.value;
        // Log the selected opacity to the console
        console.log('Selected Opacity:', opacity);
        dispatch(setLogoTextBusinessNameTextOpacity(opacity));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_OPACITY', payload: opacity }));
    };

    const handleOpacityMouseOut = (event) => {
        const opacity = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released opacity:', opacity);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_BUSINESS_NAME_OPACITY', payload: opacity }));
    };

  return (
    <div>
        <div>
   
        <SlideContainer  translate={props.translate}>
                <div style={{ display:'flex',flexDirection:'row',margin:'5px',columnGap:'5px',cursor:'pointer'}} onClick={()=>{props.onClick()}}>
                            <Image src="/images/logoMakerImages/svg/symboles/1.svg" width={6} height={6} />
                            <h3>Manage Text</h3>   
                        </div>
                        <div  style={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
                            <div style={{display:'flex',flexDirection:'row',columnGap:'5px',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                <h3>Customized Text</h3>
                                {/* <button
                                    style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',border:'2px solid purple',borderRadius:'10px',paddingLeft:"4px",paddingRight:'4px'}}
                                >
                                <Image src={`/images/logoMakerImages/svg/button/${hover ? "2.svg": "1.svg" }`} width={10} height={10}/>
                                <h2 style={{fontSize:'14px',color:hover ? '#FFFFFF': '#6B42CAF2'}}>Add</h2>
                                </button>   */}
                            </div>
                            <div style={{margin:'10px'}}>
                                <p>
                                Change the font, color and more to make your text stand out.
                                </p>
                            </div>
                            <hr/>
                            <ColumnContainer>
                                <h3>Edit Text</h3>        
                                <input type='text' 
                                    style={{border:'1px solid #6B42CA',borderRadius:'10px',marginTop:'5px'}} 
                                    placeholder='Add your text'
                                    onInput={handleBusinessNameInput}
                                />
                            </ColumnContainer>
                            <hr/>

                            <ColumnContainer>
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
                                <h3>Font</h3>
                                <button style={{backgroundColor:'#6B42CA' ,borderRadius:'10px',color:'white',paddingLeft:'8px',paddingRight:'8px',fontSize:'14px'}} onClick={changeFontEvent} >Change Font</button>
                                </div>
                                <h3 style={{fontWeight:'500'}}>Poppins - 500</h3>        
                                
                            </ColumnContainer>
                            <hr/>

                            <ColumnContainer>
                                <h3>Font Size (px)</h3>
                                <div>
                                    <input className='range' type='range' width="100px"  min="0" max="100" step="1" onChange={handleFontSize} onMouseOut={handleFontSizeMouseOut}
                                    /> 
                                </div>
                            </ColumnContainer>
                            <hr/>

                            <ColumnContainer>
                                <h3>Letter Spacing</h3>
                                <div>
                                    <input className='range' type='range' width="100px"  min="0" max="100" step="1" onChange={handleLetterSpacing} onMouseOut={handleLetterSpacingMouseOut}
                                    /> 
                                </div>

                                <h3>Rotate (°)</h3>
                                <div>
                                    <input className='range' type='range' width="100px"  min="0" max="360" step="1" onChange={handleRotate} onMouseOut={handleRotateMouseOut}
                                    /> 
                                </div>

                                {/* <h3>Curve (°)</h3>
                                <div>
                                    <input className='range' type='range' width="100px"  min="0" max="100" step="1" onChange={(e)=>{console.log(e.target.value)}} 
                                    /> 
                                </div> */}
                            </ColumnContainer>
                            <hr/>

                            <RowContainer>
                                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <h3 style={{textAlign:'center'}}>Alignment</h3>
                                </div>
                                
                                <ul style={{display:'flex',flexDirection:'row',columnGap:'5px',alignItems:'center'}}>
                                    {
                                        alignments.map((url,index)=>{
                                            return(
                                                <li key={index} style={{padding:'8px', backgroundColor:alimentIndex == index ?  '#D9D9D9' : '',borderRadius:'5px'}} onClick={()=>{ setAlimentIndex(index); handleAlignment(index); }}>
                                                    <Image src={url} width={17} height={17} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </RowContainer>
                            <hr/>

                            <ColumnContainer>
                                <h3 style={{marginLeft:'10px'}}>Text color</h3>
                                <ColorComponent onColorChange={handleColorChange}/>
                            </ColumnContainer>

                            <ColumnContainer>
                                <h3>Text opacity (%)</h3>
                                <div>
                                    <input className='range' type='range' width="100px"  min="0" max="1" step="0.01" onChange={handleOpacityChange} onMouseOut={handleOpacityMouseOut}
                                    /> 
                                </div>
                            </ColumnContainer>
                        </div>
        
        <SlideContainer translate={visible}  onClick={()=>{setVisible(false)}}/>
        </SlideContainer>

        </div>

        <ChangeFont  translate={move} onClick={()=>{ setMove(prev => !prev)}} >                      
        </ChangeFont>

    </div>
      
  )
}
