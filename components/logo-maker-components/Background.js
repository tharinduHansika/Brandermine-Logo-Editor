import React from 'react'
import ColorComponent from './common/ColorComponent'
import ColumnContainer from './common/ColumnContainer'
import { useSelector, useDispatch } from 'react-redux';
import { setLogoBackgroundColor } from './../../store/slice/logoBackgroundSlice';
import { addStep } from './../../store/slice/undoRedoSlice';


export default function Background() {

  const backgroundColor = useSelector((state) => state.logoBackground.logoBackgroundColor);
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    // Log the selected color to the console
    console.log('Selected Color:', color);
    dispatch(setLogoBackgroundColor(color));

    // Dispatch the addStep action to add the current state to the history
    dispatch(addStep({ type: 'UPDATE_BACKGROUND_COLOR', payload: color }));
  };

  return (
      <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                      <h3 style={{fontSize:'20px'}}>Background</h3>  
                      <p style={{fontSize:'15px'}}>Pick a background color for your logo.</p>
            </div>
            <hr/>
            
            <ColumnContainer>
                <h3 style={{marginLeft:'10px'}}>Background color</h3>
                <ColorComponent onColorChange={handleColorChange}/>
            </ColumnContainer>
       </div>

  )
}
