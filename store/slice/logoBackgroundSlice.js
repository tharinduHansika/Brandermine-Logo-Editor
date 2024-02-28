// slices/logoBackgroundSlice.js
import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
  // Your existing state
  logoBackgroundColor: '#ffffff', // Default background color

  // History for undo and redo
  history: [],
  currentStep: -1,
};

const logoBackgroundColorSlice = createSlice({
  name: 'logoBackground',
  initialState,
  reducers: {
    setLogoBackgroundColor: (state, action) => {
      state.logoBackgroundColor = action.payload;
    },

    addStep: (state, action) => {
      state.history = [...state.history.slice(0, state.currentStep + 1), action.payload];
      state.currentStep++;
    },

    undo: (state) => {
      if (state.currentStep > 0) {
        state.currentStep--;
        // Modify the draft state directly
        state.logoBackgroundColor = state.history[state.currentStep].logoBackgroundColor;
      }
    },

    redo: (state) => {
      if (state.currentStep < state.history.length - 1) {
        state.currentStep++;
        // Modify the draft state directly
        state.logoBackgroundColor = state.history[state.currentStep].logoBackgroundColor;
      }
    },

  },
});

export const { addStep, undo, redo } = logoBackgroundColorSlice.actions;
export const { setLogoBackgroundColor } = logoBackgroundColorSlice.actions;
export default logoBackgroundColorSlice.reducer;
