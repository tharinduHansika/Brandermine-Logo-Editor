// slices/logoBackgroundSlice.js
import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
  undoRedo: null,

  // History for undo and redo
  history: [],
  currentStep: -1,
};

const undoRedoSlice = createSlice({
  name: 'undoRedo',
  initialState,
  reducers: {

    addStep: (state, action) => {
      state.history = [...state.history.slice(0, state.currentStep + 1), action.payload];
      state.currentStep++;
    },

    undo: (state) => {
      if (state.currentStep > 0) {
        state.currentStep--;
        // Modify the draft state directly
        state.undoRedo = state.history[state.currentStep].undoRedo;
      }
    },

    redo: (state) => {
      if (state.currentStep < state.history.length - 1) {
        state.currentStep++;
        // Modify the draft state directly
        state.undoRedo = state.history[state.currentStep].undoRedo;
      }
    },

  },
});

export const { addStep, undo, redo } = undoRedoSlice.actions;
export default undoRedoSlice.reducer;
