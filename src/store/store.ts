import { configureStore, combineReducers } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";

const rootReducer = combineReducers({
  form: formReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
