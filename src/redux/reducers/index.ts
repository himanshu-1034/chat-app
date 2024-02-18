import { combineReducers } from "@reduxjs/toolkit";
import isLoggedIn from "./isLoggedIn";
import profileSummary from "./profileSummary";


export const rootReducer = combineReducers({
    loggedIn: isLoggedIn,
    profileSummary: profileSummary
});