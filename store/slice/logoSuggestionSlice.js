// slices/logoSuggestionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const logoSuggestionSlice = createSlice({
  name: 'logoSuggestion',
  initialState: {
    logoIcon: null, // Default logo Icon
  },
  reducers: {
    setLogoIcon: (state, action) => {
      state.logoIcon = action.payload;
    },
  },
});

export const { setLogoIcon } = logoSuggestionSlice.actions;
export default logoSuggestionSlice.reducer;
