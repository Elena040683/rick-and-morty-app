import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { characters, loading, error } from './characters/reducers';

const rootReducer = combineReducers({
  characters,
  loading,
  error,
});

export const store = configureStore({
  reducer: rootReducer,
});
