import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getCharacterDetailsRequest,
  getCharacterDetailsSuccess,
  getCharacterDetailsFailuer,
} from './actions';

const characterDetails = createReducer({}, builder => {
  builder.addCase(getCharacterDetailsSuccess, (state, action) => {
    return { ...state, ...action.payload };
  });
});

const loading = createReducer(false, builder => {
  builder
    .addCase(getCharacterDetailsRequest, (_, action) => true)
    .addCase(getCharacterDetailsSuccess, (_, action) => false)
    .addCase(getCharacterDetailsFailuer, (_, action) => false);
});

const error = createReducer(null, builder => {
  builder.addCase(getCharacterDetailsFailuer, (_, action) => action.payload);
});

export const singleCharacterDetailsReduser = combineReducers({
  characterDetails,
  loading,
  error,
});
