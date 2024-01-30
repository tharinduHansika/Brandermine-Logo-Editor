import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  orderId: "", // unix date
  price: 0,
  orderType: "",
  packageType: "",
  packageName: "",
  logoType: "",
  logoUrl: "",
  colorPalette: "",
  colorPaletteUrl: "",
  colorName: "",
  extraColorRequirement: "",
  extraColorAttachment: {},
  brandStyle: {
    classic: 0,
    modern: 0,
    feminine: 0,
    masculine: 0,
    simple: 0,
    complex: 0,
    artistic: 0,
    bold: 0,
    traditional: 0,
    innovative: 0,
  },
  logoName: "",
  slogan: "",
  industry: "",
  audianceInfo: "",
  fontInfo: "",
  fontAttchment: {},
  extraInfo: "",
  extraAttachment: {},
  status: "New",
  createdAt: "",
  updatedAt: "",
};

export const premiumOrderSlice = createSlice({
  name: "premiumOrder",
  initialState,
  reducers: {
    placePremOrder: (state, action) => {
      return (state = {
        ...state,
        ...action.payload,
      });
    },

    clearPlacedPremOrder: (state, action) => {
      return (state = {
        ...initialState,
      });
    },
  },
});

export const { placePremOrder, clearPlacedPremOrder } =
  premiumOrderSlice.actions;

export default premiumOrderSlice.reducer;
