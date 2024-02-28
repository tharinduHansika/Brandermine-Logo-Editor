// redux/colorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLogoColor: 'black', // Initialize with the appropriate initial value
  selectedNameColor: 'black', // Add a new property for the name color
  selectedSloganColor: 'black', // Add a new property for the slogan color
  selectedBackgroundColor: 'white', // Add a new property for the slogan color

  // History for undo and redo
  history: [],
  currentStep: -1,
};

const logoColorSlice = createSlice({
  name: 'logoColor',
  initialState,
  // initialState: {
  //   selectedColor: 'black',
  // },
  reducers: {
    setSelectedLogoColor: (state, action) => {
      state.selectedLogoColor = action.payload;
    },
    setSelectedNameColor: (state, action) => {
      state.selectedNameColor = action.payload;
    },
    setSelectedSloganColor: (state, action) => {
      state.selectedSloganColor = action.payload;
    },
    setSelectedBackgroundColor: (state, action) => {
      state.selectedBackgroundColor = action.payload;
    },
    
  },
});

export const {
  setSelectedLogoColor,
  setSelectedNameColor,
  setSelectedSloganColor,
  setSelectedBackgroundColor,
} = logoColorSlice.actions;

export default logoColorSlice.reducer;
