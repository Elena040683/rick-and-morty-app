import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFailure,
} from './actions';

const characters = createReducer({}, builder => {
  builder.addCase(getCharactersSuccess, (state, action) => {
    return { ...state, ...action.payload };
  });
});

const loading = createReducer(false, builder => {
  builder
    .addCase(getCharactersRequest, (_, action) => true)
    .addCase(getCharactersSuccess, (_, action) => false)
    .addCase(getCharactersFailure, (_, action) => false);
});

const error = createReducer(null, builder => {
  builder.addCase(getCharactersFailure, (_, action) => action.payload);
});

export const allCharactersReducer = combineReducers({
  characters,
  loading,
  error,
});
