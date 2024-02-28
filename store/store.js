import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import premiumOrderReducer from "./slice/premiumOrderSlice";
import logoColorReducer from "./slice/logoColorSlice";
import logoBackgroundColorReducer from "./slice/logoBackgroundSlice";
import logoIconColorReducer from "./slice/logoIconSlice";
import logoTextSliceReducer from "./slice/logoTextSlice";
import logoShapeSliceReducer from "./slice/logoShapeSlice";
import shapeManageSliceReducer from "./slice/shapeManageSlice";
import shapeSliceReducer from "./slice/ShapeSlice";
import logoSuggestionReducer from "./slice/logoSuggestionSlice";
import logoLayoutReducer from "./slice/logoLayoutSlice";
import undoRedoReducer from "./slice/undoRedoSlice";

const reducers = combineReducers({
  premiumOrder: premiumOrderReducer,
  logoColor: logoColorReducer,
  logoBackground: logoBackgroundColorReducer,
  logoIcon: logoIconColorReducer,
  logoText: logoTextSliceReducer,
  logoShape: logoShapeSliceReducer,
  shapeManage: shapeManageSliceReducer,
  shape: shapeSliceReducer,
  logoSuggestion: logoSuggestionReducer,
  logoLayout: logoLayoutReducer,
  undoRedo: undoRedoReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export const persistore = persistStore(store);
