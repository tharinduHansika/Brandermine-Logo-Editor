// slices/shapeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const shapeSlice = createSlice({
  name: 'shape',
  initialState: {
    shapeSVG: {
      svg: null, // shape svg
      svgColor: null, 
      svgOpacity: 1,
      svgStroke: null,
      svgStrokeWidth: 0,
      svgStrokeOpacity: 1,
      svgWidth: null,
      svgHeight: null,
      svgCornerRadius: null,
      svgHorizontalFlip: null,
      svgVerticalFlip: null,
      svgRotate: null,
      svgHorizontalPosition: null,
      svgVerticalPosition: null,
      svgShadow: null,
      svgShadowColor: null,
      svgShadowOpacity: null,
      svgShadowHorizontalPosition: null,
      svgShadowVerticalPosition: null,
      svgShadowBlur: null,
      svgBlur: null,
      svgBlurLevel: null,
    }, 


  },
  reducers: {
    setShapeSVG: (state, action) => {
      state.shapeSVG = action.payload;
    },
    
  },
});

export const { setShapeSVG, } = shapeSlice.actions;
export default shapeSlice.reducer;