import {combineReducers} from 'redux';
import { listReducer } from './listReducer';
import { darkMode } from './darkModeReducer';
export const rootReducer =   combineReducers({listReducer,darkMode});

