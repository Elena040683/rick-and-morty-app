import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { allCharactersReducer } from './characters/reducers';
import { singleCharacterDetailsReduser } from './characterDetails/redusers';

const rootReducer = combineReducers({
  allCharactersReducer,
  singleCharacterDetailsReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});
