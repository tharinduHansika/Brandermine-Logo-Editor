// slices/logoLayoutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const jsonData = 
  {
    "id": 1,
    "attributes": {
      "logo_icon": {
        "iconSize": 360,
        "position": {
          "x": 92,
          "y": 28
        }
      },
      "brand_name": {
        "name": "Your Brand",
        "fontSize": 60,
        "position": {
          "x": 275,
          "y": 460
        }
      },
      "slog_name": {
        "name": "Your Slogan",
        "fontSize": 36,
        "position": {
          "x": 275,
          "y": 500
        },
        "letterSpacing": 0
      },
      "layout_art_board": {
        "margin": {
          "top": 15,
          "left": 20,
          "right": 20,
          "bottom": 15
        }
      },
      "createdAt": "2023-12-11T03:22:11.576Z",
      "updatedAt": "2023-12-11T03:22:11.576Z"
    }
  }

const logoLayoutSlice = createSlice({
  name: 'logoLayout',
  initialState: {
    //logoLayoutDetails: null, // Default layout details 
    logoLayoutDetails: jsonData, // Default layout details 
  },
  reducers: {
    setLogoLayoutDetails: (state, action) => {
      state.logoLayoutDetails = action.payload;
    },
  },
});

export const { setLogoLayoutDetails } = logoLayoutSlice.actions;
export default logoLayoutSlice.reducer;