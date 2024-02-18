import {legacy_createStore, applyMiddleware} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { rootReducer } from '../reducers';

const middleware = applyMiddleware(thunk);

export const store = legacy_createStore(rootReducer, middleware);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch