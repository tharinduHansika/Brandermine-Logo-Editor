// slices/logoTextSlice.js
import { createSlice } from '@reduxjs/toolkit';

const logoTextSlice = createSlice({
  name: 'logoText',
  initialState: {
    logoTextBusinessNameEditText: null, // business name
    logoTextBusinessNameFontFamily: {
      name: 'null',
      extension: 'null', 
    }, //font family
    logoTextBusinessNameFontSize: null, //font size
    logoTextBusinessNameLetterSpacing: null, //letter spacing
    logoTextBusinessNameRotate: null, //rotate
    logoTextBusinessNameCurve: null, //curve
    logoTextBusinessNameAlignment: null, //allignment
    logoTextBusinessNameTextColor: null, //text color
    logoTextBusinessNameTextOpacity: null, //text opacity

    logoTextSloganNameEditText: null, // Slogan name
    logoTextSloganNameFontFamily: {
      name: 'null',
      extension: 'null', 
    }, //font family
    logoTextSloganNameFontSize: null, //font size
    logoTextSloganNameLetterSpacing: null, //letter spacing
    logoTextSloganNameRotate: null, //rotate
    logoTextSloganNameCurve: null, //curve
    logoTextSloganNameAlignment: null, //allignment
    logoTextSloganNameTextColor: null, //text color
    logoTextSloganNameTextOpacity: null, //text opacity

  },
  reducers: {
    setLogoTextBusinessNameEditText: (state, action) => {
      state.logoTextBusinessNameEditText = action.payload;
    },
    setLogoTextBusinessNameFontFamily: (state, action) => {
      state.logoTextBusinessNameFontFamily = action.payload;
    },
    setLogoTextBusinessNameFontSize: (state, action) => {
        state.logoTextBusinessNameFontSize = action.payload;
    },
    setLogoTextBusinessNameLetterSpacing: (state, action) => {
        state.logoTextBusinessNameLetterSpacing = action.payload;
    },
    setLogoTextBusinessNameRotate: (state, action) => {
        state.logoTextBusinessNameRotate = action.payload;
    },
    setLogoTextBusinessNameCurve: (state, action) => {
        state.logoTextBusinessNameCurve = action.payload;
    },
    setLogoTextBusinessNameAlignment: (state, action) => {
        state.logoTextBusinessNameAlignment = action.payload;
    },
    setLogoTextBusinessNameTextColor: (state, action) => {
        state.logoTextBusinessNameTextColor = action.payload;
    },
    setLogoTextBusinessNameTextOpacity: (state, action) => {
        state.logoTextBusinessNameTextOpacity = action.payload;
    },
    setLogoTextSloganNameEditText: (state, action) => {
      state.logoTextSloganNameEditText = action.payload;
    },
    setLogoTextSloganNameFontFamily: (state, action) => {
      state.logoTextSloganNameFontFamily = action.payload;
    },
    setLogoTextSloganNameFontSize: (state, action) => {
        state.logoTextSloganNameFontSize = action.payload;
    },
    setLogoTextSloganNameLetterSpacing: (state, action) => {
        state.logoTextSloganNameLetterSpacing = action.payload;
    },
    setLogoTextSloganNameRotate: (state, action) => {
        state.logoTextSloganNameRotate = action.payload;
    },
    setLogoTextSloganNameCurve: (state, action) => {
        state.logoTextSloganNameCurve = action.payload;
    },
    setLogoTextSloganNameAlignment: (state, action) => {
        state.logoTextSloganNameAlignment = action.payload;
    },
    setLogoTextSloganNameTextColor: (state, action) => {
        state.logoTextSloganNameTextColor = action.payload;
    },
    setLogoTextSloganNameTextOpacity: (state, action) => {
        state.logoTextSloganNameTextOpacity = action.payload;
    },
  },
});

export const { setLogoTextBusinessNameEditText, 
               setLogoTextBusinessNameFontFamily,
               setLogoTextBusinessNameFontSize, 
               setLogoTextBusinessNameLetterSpacing,
               setLogoTextBusinessNameRotate,
               setLogoTextBusinessNameCurve,
               setLogoTextBusinessNameAlignment,
               setLogoTextBusinessNameTextColor,
               setLogoTextBusinessNameTextOpacity,
               setLogoTextSloganNameEditText, 
               setLogoTextSloganNameFontFamily,
               setLogoTextSloganNameFontSize, 
               setLogoTextSloganNameLetterSpacing,
               setLogoTextSloganNameRotate,
               setLogoTextSloganNameCurve,
               setLogoTextSloganNameAlignment,
               setLogoTextSloganNameTextColor,
               setLogoTextSloganNameTextOpacity,

} = logoTextSlice.actions;
export default logoTextSlice.reducer;