// slices/logoShapeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const shapeInitial = {}

const logoShapeSlice = createSlice({
  name: 'logoShape',
  initialState: {
    logoShapeIcon: null, // Default background shape
    //logoShapeIcon: shapeInitial, // Default background shape
  },
  reducers: {
    setLogoShapeIcon: (state, action) => {
      state.logoShapeIcon = action.payload;
    },
  },
});

export const { setLogoShapeIcon } = logoShapeSlice.actions;
export default logoShapeSlice.reducer;
