import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "./user/userReducer";

const combinedReducers = combineReducers({
    user: userReducer
})

const logger = createLogger()
const middlewares = []

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}


const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            // ignoreActions:[FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE],
            ignoredActionPaths: ['payload.createdAt'],
            ignoredPaths: ['user.currentUser.createdAt']
        }
    }).concat(middlewares)
})

export default store