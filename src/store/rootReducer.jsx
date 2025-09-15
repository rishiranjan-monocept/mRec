import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import languageReducer from "../features/language/languageSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  language: languageReducer,
});

export default rootReducer;
