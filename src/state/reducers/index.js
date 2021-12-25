import { combineReducers } from "redux";

import personalityTestReducer from "./personalityTestReducer";

const rootReducer = combineReducers({
  personalityTest: personalityTestReducer
});

export default rootReducer;
