import React, {useState} from 'react'
import SlideContainer from './common/SlideContainer'
import ColorComponent from './common/ColorComponent'
import ColumnContainer from './common/ColumnContainer'
import Image from "next/image"
import { Switch } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { setLogoIconColor, setLogoIconOpacity, setLogoIconHorizontalFlip, setLogoIconVerticalFlip, setLogoIconSize, setLogoIconRotate, setLogoIconHorizontalPosition, setLogoIconVerticalPosition, setLogoIconShadow, setLogoIconShadowColor, setLogoIconShadowOpacity, setLogoIconShadowBlur, setLogoIconBlur, setLogoIconBlurLevel, setLogoIconShadowHorizontalPosition, setLogoIconShadowVerticalPosition } from '../../store/slice/logoIconSlice';
import { addStep } from './../../store/slice/undoRedoSlice';

export default function Icons(props) {
    const [showContentShadow, setShowContentShadow] = useState(false);
    const [showContentBlur, setShowContentBlur] = useState(false);

    const [iconHorizontalFlip, setIconHorizontalFlip] = useState(true);
    const [iconVerticalFlip, setIconVerticalalFlip] = useState(true);

    const iconColor = useSelector((state) => state.logoIcon.logoIconColor);
    const dispatch = useDispatch();

    const handleColorChange = (color) => {
        // Log the selected color to the console
        console.log('Selected Color:', color);
        dispatch(setLogoIconColor(color));

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_COLOR', payload: color }));
    };

    const handleOpacityChange = (event) => {
        const opacity = event.target.value;
        // Log the selected opacity to the console
        console.log('Selected Opacity:', opacity);
        dispatch(setLogoIconOpacity(opacity));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_OPACITY', payload: opacity }));
    };

    const handleOpacityMouseOut = (event) => {
        const opacity = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Opacity:', opacity);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_OPACITY', payload: opacity }));
    };

    const handleSizeChange = (event) => {
        const size = event.target.value;
        // Log the selected size to the console
        console.log('Selected Size:', size);
        dispatch(setLogoIconSize(size));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_SIZE', payload: size }));
    };

    /////////////////////////////////////////////
    const handleSizeMouseOut = (event) => {
        const size = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Size:', size);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_SIZE', payload: size }));
    };

    const flipHorizontal = () => {
        setIconHorizontalFlip(!iconHorizontalFlip);
        // Log the selected flip to the console
        console.log('Selected flip:', iconHorizontalFlip);
        dispatch(setLogoIconHorizontalFlip(iconHorizontalFlip));

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_HORIZONTAL_FLIP', payload: iconHorizontalFlip }));
    };
    
      const flipVertical = () => {
        setIconVerticalalFlip(!iconVerticalFlip);
        // Log the selected flip to the console
        console.log('Selected flip:', iconVerticalFlip);
        dispatch(setLogoIconVerticalFlip(iconVerticalFlip));

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_VERTICAL_FLIP', payload: iconVerticalFlip }));
    };

    const handleRotateChange = (event) => {
        const rotate = event.target.value;
        // Log the selected size to the console
        console.log('Selected Rotate:', rotate);
        dispatch(setLogoIconRotate(rotate));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_ROTATE', payload: rotate }));
    };

    const handleRotateMouseOut = (event) => {
        const rotate = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released rotate:', rotate);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_ROTATE', payload: rotate }));
    };

    const handleHorizontalPositionChange = (event) => {
        const horizontalPosition = event.target.value;
        // Log the selected h position to the console
        console.log('Selected horizontal position:', horizontalPosition);
        dispatch(setLogoIconHorizontalPosition(horizontalPosition));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_HORIZONTAL_POSITION', payload: horizontalPosition }));
    }

    const handleHorizontalPositionMouseOut = (event) => {
        const horizontalPosition = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Horizontal Position:', horizontalPosition);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_HORIZONTAL_POSITION', payload: horizontalPosition }));
    };

    const handleVerticlePositionChange = (event) => {
        const verticalPosition = event.target.value;
        // Log the selected h position to the console
        console.log('Selected horizontal position:', verticalPosition);
        dispatch(setLogoIconVerticalPosition(verticalPosition));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_VERTICAL_POSITION', payload: verticalPosition }));
    }

    const handleVerticalPositionMouseOut = (event) => {
        const verticalPosition = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Vertical Position:', verticalPosition);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_VERTICAL_POSITION', payload: verticalPosition }));
    };

    const toggleContentShadow = () => {
        setShowContentShadow(!showContentShadow);
        // Log the selected shadow status to the console
        console.log('Selected shadow status:', (!showContentShadow));
        dispatch(setLogoIconShadow((!showContentShadow)));

    };

    const handleShadowColorChange = (color) => {
        // Log the selected color to the console
        console.log('Selected Color:', color);
        dispatch(setLogoIconShadowColor(color));

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_SHADOW_COLOR', payload: color }));
    }

    const handleShadowOpacityChange = (event) => {
        const opacity = event.target.value;
        // Log the selected opacity to the console
        console.log('Selected Opacity:', opacity);
        dispatch(setLogoIconShadowOpacity(opacity));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_SHADOW_OPACITY', payload: opacity }));
    }

    const handleShadowOpacityMouseOut = (event) => {
        const opacity = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Icon Shadow Opacity:', opacity);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_SHADOW_OPACITY', payload: opacity }));
    };

    const handleShadowHorizontalPositionChange = (event) => {
        const HP = event.target.value;
        // Log the selected shadow H position to the console
        console.log('Selected HP:', HP);
        dispatch(setLogoIconShadowHorizontalPosition(HP));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_SHADOW_HORIZONTAL_POSITION', payload: HP }));
    }

    const handleShadowHorizontalPositionMouseOut = (event) => {
        const HP = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Shadow Horizontal Position:', HP);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_SHADOW_HORIZONTAL_POSITION', payload: HP }));
    };

    const handleShadowVerticalPositionChange = (event) => {
        const VP = event.target.value;
        // Log the selected shadow H position to the console
        console.log('Selected VP:', VP);
        dispatch(setLogoIconShadowVerticalPosition(VP));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_SHADOW_VERTICAL_POSITION', payload: VP }));
    }

    const handleShadowVerticalPositionMouseOut = (event) => {
        const VP = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Shadow Vertical Position:', VP);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_SHADOW_VERTICAL_POSITION', payload: VP }));
    };

    const handleShadowBlurChange = (event) => {
        const blur = event.target.value;
        // Log the selected opacity to the console
        console.log('Selected Opacity:', blur);
        dispatch(setLogoIconShadowBlur(blur));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_SHADOW_BLUR', payload: blur }));
    }

    const handleShadowBlurMouseOut = (event) => {
        const blur = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Shadow Blur:', blur);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_SHADOW_BLUR', payload: blur }));
    };

    const toggleContentBlur = () => {
        setShowContentBlur(!showContentBlur);
        // Log the selected icon blur status to the console
        console.log('Selected icon blur:', (!showContentBlur));
        dispatch(setLogoIconBlur((!showContentBlur)));
        dispatch(setLogoIconBlurLevel(10));

    };

    const handleIconBlurLevelChange = (event) => {
        const blur = event.target.value;
        // Log the selected blur level to the console
        console.log('Selected blur level:', blur);
        dispatch(setLogoIconBlurLevel(blur));

        // Dispatch the addStep action to add the current state to the history
        //dispatch(addStep({ type: 'UPDATE_ICON_BLUR_LEVEL', payload: blur }));
    }

    const handleShadowBlurLevelMouseOut = (event) => {
        const blur = event.target.value;
        // Log the selected size to the console
        console.log('Mouse Released Shadow Blur Level:', blur);

        // Dispatch the addStep action to add the current state to the history
        dispatch(addStep({ type: 'UPDATE_ICON_BLUR_LEVEL', payload: blur }));
    };

  return (
    <div style={{}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px',alignItems:'center'}}>
           <h2 style={{fontSize:'16px',fontWeight:'500'}}>Manage Icons</h2>
       </div>
       <div style={{margin:'10px'}}>
              <p> Customize how this icon looks on your design, or replace it with something new.</p>
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
                        <input className='range' type='range' width="100px"  min="0" max="1" step="0.01" onChange={handleOpacityChange} onMouseOut={handleOpacityMouseOut}
                        /> 
                    </div>
                </ColumnContainer>
                <hr/>

                <ColumnContainer>
                    <h3>Size (px)</h3>
                    <div>
                        <input className='range' type='range' width="100px"  min="0" max="99" step="1" onChange={handleSizeChange} onMouseOut={handleSizeMouseOut}
                        /> 
                    </div>
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
                        <input className='range' type='range' width="100px"  min="0" max="360" step="1" onChange={handleRotateChange} onMouseOut={handleRotateMouseOut}
                        /> 
                    </div>
                    <h3>Horizontal Position (px)</h3>
                    <div>
                        <input className='range' type='range' width="100px"  min="-600" max="600" step="1" onChange={handleHorizontalPositionChange} onMouseOut={handleHorizontalPositionMouseOut}
                        /> 
                    </div>
                    <h3>Verticle Position (px)</h3>
                    <div>
                        <input className='range' type='range' width="100px"  min="-600" max="600" step="1" onChange={handleVerticlePositionChange} onMouseOut={handleVerticalPositionMouseOut}
                        /> 
                    </div>
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
                                <input className='range' type='range' width="100px"  min="0" max="1" step="0.01" onChange={handleShadowOpacityChange} onMouseOut={handleShadowOpacityMouseOut}
                                /> 
                            </div>
                            <h3>Shadow Horizontal Position (px)</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="-100" max="100" step="1" onChange={handleShadowHorizontalPositionChange}  onMouseOut={handleShadowHorizontalPositionMouseOut}
                                /> 
                            </div>
                            <h3>Shadow Vertical Position (px)</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="-100" max="100" step="1" onChange={handleShadowVerticalPositionChange} onMouseOut={handleShadowVerticalPositionMouseOut}
                                /> 
                            </div>
                            <h3>Shadow Blur</h3>
                            <div>
                                <input className='range' type='range' width="100px"  min="0" max="10" step="1" onChange={handleShadowBlurChange} onMouseOut={handleShadowBlurMouseOut}
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
                                <input className='range' type='range' width="100px"  min="0" max="10" step="1" onChange={handleIconBlurLevelChange} onMouseOut={handleShadowBlurLevelMouseOut}
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