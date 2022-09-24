import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
const store = createStore(cakeReducer); // store takes Reducer as an argument

export default store;

// Next step - provide this store to our React App
// 1. react-redux library will be used and imported in App.js
// 2. react-reduxlibrary exports a component call <Provider/>
// 3. let's go to App.js
