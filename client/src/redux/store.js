import { userReducer } from "./reducer";
import thunk from "redux-thunk";
import { createStore,compose,applyMiddleware } from "redux";
const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store=createStore(userReducer,compose(applyMiddleware(thunk),devtools))