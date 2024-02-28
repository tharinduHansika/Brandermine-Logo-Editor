// slices/shapeManageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const shapeManageSlice = createSlice({
  name: 'shapeManage',
  initialState: {
    shapeColor: null, // Default background color
    shapeOpacity: 1, // Default background opacity
    shapeBorder: null,
    shapeBorderWidth: 0,
    shapeBorderColor: null,
    shapeBorderOpacity: 1,
    shapeWidth: 100,
    shapeHeight: 150,
    shapeCornerRadius: 0,
    shapeHorizontalFlip: null,
    shapeVerticalFlip: null,
    shapeRotate: 1,
    shapeHorizontalPosition: 0,
    shapeVerticalPosition: 0,
    shapeShadow: null,
    shapeShadowColor: null,
    shapeShadowOpacity: 1,
    shapeShadowHorizontalPosition: 4,
    shapeShadowVerticalPosition: 4,
    shapeShadowBlur: 1,
    shapeBlur: null,
    shapeBlurLevel: 1,
  },
  reducers: {
    setShapeColor: (state, action) => {
      state.shapeColor = action.payload;
    },
    setShapeOpacity: (state, action) => {
        state.shapeOpacity = action.payload;
    },
    setShapeBorder: (state, action) => {
        state.shapeBorder = action.payload;
    },
    setShapeBorderWidth: (state, action) => {
        state.shapeBorderWidth = action.payload;
    },
    setShapeBorderColor: (state, action) => {
        state.shapeBorderColor = action.payload;
    },
    setShapeBorderOpacity: (state, action) => {
        state.shapeBorderOpacity = action.payload;
    },
    setShapeWidth: (state, action) => {
      state.shapeWidth = action.payload;
    },
    setShapeHeight: (state, action) => {
      state.shapeHeight = action.payload;
    },
    setShapeCornerRadius: (state, action) => {
      state.shapeCornerRadius = action.payload;
    },
    setShapeHorizontalFlip: (state, action) => {
      state.shapeHorizontalFlip = action.payload;
    },
    setShapeVerticalFlip: (state, action) => {
      state.shapeVerticalFlip = action.payload;
    },
    setShapeRotate: (state, action) => {
      state.shapeRotate = action.payload;
    },
    setShapeHorizontalPosition: (state, action) => {
      state.shapeHorizontalPosition = action.payload;
    },
    setShapeVerticalPosition: (state, action) => {
      state.shapeVerticalPosition = action.payload;
    },
    setShapeShadow: (state, action) => {
      state.shapeShadow = action.payload;
    },
    setShapeShadowColor: (state, action) => {
      state.shapeShadowColor = action.payload;
    },
    setShapeShadowOpacity: (state, action) => {
        state.shapeShadowOpacity = action.payload;
    },
    setShapeShadowHorizontalPosition: (state, action) => {
        state.shapeShadowHorizontalPosition = action.payload;
    },
    setShapeShadowVerticalPosition: (state, action) => {
        state.shapeShadowVerticalPosition = action.payload;
    },
    setShapeShadowBlur: (state, action) => {
        state.shapeShadowBlur = action.payload;
    },
    setShapeBlur: (state, action) => {
        state.shapeBlur = action.payload;
    },
    setShapeBlurLevel: (state, action) => {
        state.shapeBlurLevel = action.payload;
      },
  },
});

export const { 
  setShapeColor, 
  setShapeOpacity, 
  setShapeBorder, 
  setShapeBorderWidth, 
  setShapeBorderColor, 
  setShapeBorderOpacity,
  setShapeWidth,
  setShapeHeight,
  setShapeCornerRadius,
  setShapeHorizontalFlip,
  setShapeVerticalFlip,
  setShapeRotate,
  setShapeHorizontalPosition,
  setShapeVerticalPosition,
  setShapeShadow,
  setShapeShadowColor,
  setShapeShadowOpacity,
  setShapeShadowHorizontalPosition,
  setShapeShadowVerticalPosition,
  setShapeShadowBlur,
  setShapeBlur,
  setShapeBlurLevel,
  
} = shapeManageSlice.actions;
export default shapeManageSlice.reducer;
