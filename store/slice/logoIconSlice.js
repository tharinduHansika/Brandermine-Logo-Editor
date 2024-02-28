// slices/logoIconSlice.js
import { createSlice } from '@reduxjs/toolkit';

const logoIconColorSlice = createSlice({
  name: 'logoIcon',
  initialState: {
    logoIconColor: null, // Default background color
    logoIconOpacity: 1, // Default background opacity
    logoIconSize: 62,
    logoIconHorizontalFlip: null,
    logoIconVerticalFlip: null,
    logoIconRotate: 0,
    logoIconHorizontalPosition: 0,
    logoIconVerticalPosition: 0,
    logoIconShadow: null,
    logoIconShadowColor: null,
    logoIconShadowOpacity: 1,
    logoIconShadowHorizontalPosition: 4,
    LogoIconShadowVerticalPosition: 4,
    logoIconShadowBlur: 1,
    logoIconBlur: null,
    logoIconBlurLevel: 10,
  },
  reducers: {
    setLogoIconColor: (state, action) => {
      state.logoIconColor = action.payload;
    },
    setLogoIconOpacity: (state, action) => {
        state.logoIconOpacity = action.payload;
    },
    setLogoIconSize: (state, action) => {
        state.logoIconSize = action.payload;
    },
    setLogoIconHorizontalFlip: (state, action) => {
        state.logoIconHorizontalFlip = action.payload;
    },
    setLogoIconVerticalFlip: (state, action) => {
        state.logoIconVerticalFlip = action.payload;
    },
    setLogoIconRotate: (state, action) => {
        state.logoIconRotate = action.payload;
    },
    setLogoIconHorizontalPosition: (state, action) => {
      state.logoIconHorizontalPosition = action.payload;
    },
    setLogoIconVerticalPosition: (state, action) => {
      state.logoIconVerticalPosition = action.payload;
    },
    setLogoIconShadow: (state, action) => {
      state.logoIconShadow = action.payload;
    },
    setLogoIconShadowColor: (state, action) => {
      state.logoIconShadowColor = action.payload;
    },
    setLogoIconShadowOpacity: (state, action) => {
      state.logoIconShadowOpacity = action.payload;
    },
    setLogoIconShadowHorizontalPosition: (state, action) => {
      state.logoIconShadowHorizontalPosition = action.payload;
    },
    setLogoIconShadowVerticalPosition: (state, action) => {
      state.logoIconShadowVerticalPosition = action.payload;
    },
    setLogoIconShadowBlur: (state, action) => {
      state.logoIconShadowBlur = action.payload;
    },
    setLogoIconBlur: (state, action) => {
      state.logoIconBlur = action.payload;
    },
    setLogoIconBlurLevel: (state, action) => {
      state.logoIconBlurLevel = action.payload;
    },
  },
});

export const { 
  setLogoIconColor, 
  setLogoIconOpacity, 
  setLogoIconSize, 
  setLogoIconHorizontalFlip, 
  setLogoIconVerticalFlip, 
  setLogoIconRotate,
  setLogoIconHorizontalPosition,
  setLogoIconVerticalPosition,
  setLogoIconShadow,
  setLogoIconShadowColor,
  setLogoIconShadowOpacity,
  setLogoIconShadowHorizontalPosition,
  setLogoIconShadowVerticalPosition,
  setLogoIconShadowBlur,
  setLogoIconBlur,
  setLogoIconBlurLevel,
} = logoIconColorSlice.actions;
export default logoIconColorSlice.reducer;
