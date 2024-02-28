import React, {useState} from 'react'
import SlideContainer from './common/SlideContainer'
import ColorComponent from './common/ColorComponent'
import ColumnContainer from './common/ColumnContainer'
import Image from "next/image"
import { Switch } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { setLogoIconColor, setLogoIconOpacity, setLogoIconHorizontalFlip, setLogoIconVerticalFlip, setLogoIconSize, setLogoIconRotate, setLogoIconHorizontalPosition, setLogoIconVerticalPosition, setLogoIconShadow, setLogoIconShadowColor, setLogoIconShadowOpacity, setLogoIconShadowBlur, setLogoIconBlur, setLogoIconBlurLevel, setLogoIconShadowHorizontalPosition, setLogoIconShadowVerticalPosition } from '../../store/slice/logoIconSlice';
import { setShapeBlur, setShapeBlurLevel, setShapeBorder, setShapeBorderColor, setShapeBorderOpacity, setShapeBorderWidth, setShapeColor, setShapeCornerRadius, setShapeHeight, setShapeHorizontalPosition, setShapeOpacity, setShapeRotate, setShapeShadow, setShapeShadowBlur, setShapeShadowColor, setShapeShadowHorizontalPosition, setShapeShadowOpacity, setShapeShadowVerticalPosition, setShapeVerticalPosition, setShapeWidth } from '../../store/slice/shapeManageSlice';

export default function Icons(props) {
    const [showContentShadow, setShowContentShadow] = useState(false);
    const [showContentBlur, setShowContentBlur] = useState(false);
    const [showContentBorder, setShowContentBorder] = useState(false);

    const [shapeHorizontalFlip, setShapeHorizontalFlip] = useState(true);
    const [shapeVerticalFlip, setShapeVerticalalFlip] = useState(true);

    const iconColor = useSelector((state) => state.logoIcon.logoIconColor);
    const dispatch = useDispatch();

    const handleColorChange = (color) => {
        // Log the selected color to the console
        console.log('Selected Color:', color);
        dispatch(setShapeColor(color));
    };

    const handleOpacityChange = (event) => {
        const opacity = event.target.value;
        // Log the selected opacity to the console
        console.log('Selected Opacity:', opacity);
        dispatch(setShapeOpacity (opacity));
    };

    const toggleContentBorder = () => {
        setShowContentBorder(!showContentBorder);
        // Log the selected border status to the console
        console.log('Selected border status:', (!showContentBorder));
        dispatch(setShapeBorder((!showContentBorder)));
    };

    const handleBorderWidthChange = (event) => {
        const width = event.target.value;
        // Log the selected width to the console
        console.log('Selected Width:', width);
        dispatch(setShapeBorderWidth(width));
    };

    const handleBorderColorChange = (color) => {
        // Log the selected color to the console
        console.log('Selected Color:', color);
        dispatch(setShapeBorderColor(color));
    };

    const handleBorderOpacityChange= (event) => {
        const opacity = event.target.value;
        // Log the selected opacity to the console
        console.log('Selected Opcity:', opacity);
        dispatch(setShapeBorderOpacity(opacity));
    };

    const handleWidthChange = (event) => {
        const width = event.target.value;
        // Log the selected width to the console
        console.log('Selected Width:', width);
        dispatch(setShapeWidth(width));
    };

    const handleHeightChange = (event) => {
        const height = event.target.value;
        // Log the selected height to the console
        console.log('Selected height:', height);
        dispatch(setShapeHeight(height));
    };

    const handleCornerRadiusChange = (event) => {
        const cornerRadius = event.target.value;
        // Log the selected corner Radius to the console
        console.log('Selected corner radius:', cornerRadius);
        dispatch(setShapeCornerRadius(cornerRadius));
    };


    const flipHorizontal = () => {
        setShapeHorizontalFlip(!shapeHorizontalFlip);
        // Log the selected flip to the console
        console.log('Selected flip:', shapeHorizontalFlip);
        dispatch(setShapeHorizontalFlip(shapeHorizontalFlip));
    };
    
      const flipVertical = () => {
        setShapeVerticalalFlip(!shapeVerticalFlip);
        // Log the selected flip to the console
        console.log('Selected flip:', shapeVerticalFlip);
        dispatch(setShapeVerticalalFlip(shapeVerticalFlip));
    };

    const handleRotateChange = (event) => {
        const rotate = event.target.value;
        // Log the selected size to the console
        console.log('Selected Rotate:', rotate);
        dispatch(setShapeRotate(rotate));
    };

    const handleHorizontalPositionChange = (event) => {
        const horizontalPosition = event.target.value;
        // Log the selected h position to the console
        console.log('Selected horizontal position:', horizontalPosition);
        dispatch(setShapeHorizontalPosition(horizontalPosition));
    }

    const handleVerticlePositionChange = (event) => {
        const verticalPosition = event.target.value;
        // Log the selected v position to the console
        console.log('Selected vertical position:', verticalPosition);
        dispatch(setShapeVerticalPosition(verticalPosition));
    }

    const toggleContentShadow = () => {
        setShowContentShadow(!showContentShadow);
        // Log the selected shadow status to the console
        console.log('Selected shadow status:', (!showContentShadow));
        dispatch(setShapeShadow((!showContentShadow)));
    };

    const handleShadowColorChange = (color) => {
        // Log the selected color to the console
        console.log('Selected Color:', color);
        dispatch(setShapeShadowColor(color));
    }

    const handleShadowOpacityChange = (event) => {
        const opacity = event.target.value;
        // Log the selected opacity to the console
        console.log('Selected Opacity:', opacity);
        dispatch(setShapeShadowOpacity(opacity));
    }

    const handleShadowHorizontalPositionChange = (event) => {
        const HP = event.target.value;
        // Log the selected shadow H position to the console
        console.log('Selected HP:', HP);
        dispatch(setShapeShadowHorizontalPosition(HP));
    }

    const handleShadowVerticalPositionChange = (event) => {
        const VP = event.target.value;
        // Log the selected shadow H position to the console
        console.log('Selected VP:', VP);
        dispatch(setShapeShadowVerticalPosition(VP));
    }

    const handleShadowBlurChange = (event) => {
        const blur = event.target.value;
        // Log the selected opacity to the console
        console.log('Selected Opacity:', blur);
        dispatch(setShapeShadowBlur(blur));
    }

    const toggleContentBlur = () => {
        setShowContentBlur(!showContentBlur);
        // Log the selected icon blur status to the console
        console.log('Selected icon blur:', (!showContentBlur));
        dispatch(setShapeBlur((!showContentBlur)));
    };

    const handleShapeBlurLevelChange = (event) => {
        const blur = event.target.value;
        // Log the selected blur level to the console
        console.log('Selected blur level:', blur);
        dispatch(setShapeBlurLevel(blur));
    }


  return (
    <div style={{}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px',alignItems:'center'}}>
           <h2 style={{fontSize:'16px',fontWeight:'500'}}>Manage Shapes</h2>
       </div>
       <div style={{margin:'10px'}}>
              <p> Adjust this shape to fit your exact needs. </p>
       </div>

       <div className='customScroll' style={{width: '100%',height:'700px',overflow: 'auto', padding: '5px', borderTop:'1px solid #00000026', maxHeight: '72vh'}}>
            <div  style={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
                {/* <ColumnContainer>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
                    <h3>Icon</h3>
                    <button style={{backgroundColor:'#6B42CA' ,borderRadius:'10px',color:'white',paddingLeft:'8px',paddingRight:'8px',fontSize:'14px'}}>Change Icon</button>
                    </div>                       
                </ColumnContainer>
                <hr/> */}

                <ColumnContainer>
                    <h3>Icon Fill</h3>
                    <ColorComponent onColorChange={handleColorChange}/>
                </ColumnContainer>
                <hr/>


                <ColumnContainer>
                    <h3>Opacity (%)</h3>
                    <div>
                        <input className='range' type='range' width="100px"  min="0" max="1" step="0.01" onChange={handleOpacityChange} 
                        /> 
                    </div>
                </ColumnContainer>
                <hr/>

                <ColumnContainer>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'5px',marginBottom:'10px', justifyContent:'space-between'}}>
                        <h3 style={{fontWeight:'500'}}>Border</h3>
                        <Switch checked={showContentBorder} onChange={toggleContentBorder}/>
                    </div>
                    
                    {showContentBorder && (
                        <div style={{ marginTop: '5px' }}>
                            <h3>Border width (px)</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="0" max="20" step="1" onChange={handleBorderWidthChange}  
                                /> 
                            </div>
                            <h3>Border Color (%)</h3>
                                <ColorComponent onColorChange={handleBorderColorChange}/>
                            <h3>Border Opacity (%)</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="0" max="1" step="0.01" onChange={handleBorderOpacityChange} 
                                /> 
                            </div>
                        </div>
                    )}
                </ColumnContainer>
                <hr/>

                <ColumnContainer>
                    <h3>Width (px)</h3>
                    <div>
                        <input className='range' type='range' width="100px"  min="0" max="200" step="1" onChange={handleWidthChange}
                        /> 
                    </div>
                </ColumnContainer>
                <hr/>

                <ColumnContainer>
                    <h3>Height (px)</h3>
                    <div>
                        <input className='range' type='range' width="100px"  min="0" max="300" step="1" onChange={handleHeightChange}
                        /> 
                    </div>
                </ColumnContainer>
                <hr/>

                <ColumnContainer>
                    {/* <h3>Corner Radius (px)</h3>
                    <div>
                        <input className='range' type='range' width="100px"  min="0" max="100" step="1" onChange={handleCornerRadiusChange}
                        /> 
                    </div> */}
                </ColumnContainer>
                <hr/>

                <ColumnContainer>
                    <h3>Flip</h3>
                    <div style={{display:'flex',flexDirection:'row',columnGap:'20px',alignItems:'center',marginTop:'5px',marginBottom:'10px'}}>
                        <Image style={{cursor: 'pointer'}} src={'./../../images/logoMakerImages/svg/layout/1.png'} width={17} height={17} onClick={flipHorizontal}/>
                        <Image style={{cursor: 'pointer'}} src={'./../../images/logoMakerImages/svg/layout/2.png'} width={17} height={17} onClick={flipVertical}/>
                    </div>
                </ColumnContainer>
                <hr/>

                <ColumnContainer>
                    <h3>Rotate (°)</h3>
                    <div>
                        <input className='range' type='range' width="200px"  min="0" max="360" step="1" onChange={handleRotateChange}
                        /> 
                    </div>
                    {/* <h3>Horizontal Position (px)</h3>
                    <div>
                        <input className='range' type='range' width="100px"  min="-125" max="390" step="1" onChange={handleHorizontalPositionChange}
                        /> 
                    </div>
                    <h3>Verticle Position (px)</h3>
                    <div>
                        <input className='range' type='range' width="100px"  min="-225" max="320" step="1" onChange={handleVerticlePositionChange}
                        /> 
                    </div> */}
                </ColumnContainer>
                <hr/>

                <ColumnContainer>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'5px',marginBottom:'10px', justifyContent:'space-between'}}>
                        <h3 style={{fontWeight:'500'}}>Shadow</h3>
                        <Switch checked={showContentShadow} onChange={toggleContentShadow}/>
                    </div>
                    
                    {showContentShadow && (
                        <div style={{ marginTop: '5px' }}>
                            <h3>Shadow Color (%)</h3>
                                <ColorComponent onColorChange={handleShadowColorChange}/>
                            <h3>Shadow Opacity (%)</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="0" max="1" step="0.01" onChange={handleShadowOpacityChange} 
                                /> 
                            </div>
                            <h3>Shadow Horizontal Position (px)</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="-100" max="100" step="1" onChange={handleShadowHorizontalPositionChange}  
                                /> 
                            </div>
                            <h3>Shadow Vertical Position (px)</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="-100" max="100" step="1" onChange={handleShadowVerticalPositionChange} 
                                /> 
                            </div>
                            <h3>Shadow Blur</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="0" max="10" step="1" onChange={handleShadowBlurChange} 
                                /> 
                            </div>
                        </div>
                    )}
                </ColumnContainer>
                <hr/>

                <ColumnContainer>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'5px',marginBottom:'10px', justifyContent:'space-between'}}>
                        <h3 style={{fontWeight:'500'}}>Blur</h3>
                        <Switch checked={showContentBlur} onChange={toggleContentBlur}/>
                    </div>
                    
                    {showContentBlur && (
                        <div style={{ marginTop: '5px' }}>
                            <h3>Blur Level</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="0" max="10" step="1" onChange={handleShapeBlurLevelChange}
                                /> 
                            </div>
                        </div>
                    )}
                </ColumnContainer>
            </div>
       </div>
    </div>
  )
}