import { createReducer } from '@reduxjs/toolkit';
import {
  getCharacterDetailsRequest,
  getCharacterDetailsSuccess,
  getCharacterDetailsFailuer,
} from './actions';

export const characterDetails = createReducer({}, builder => {
  builder.addCase(getCharacterDetailsSuccess, (state, action) => {
    return { ...state, ...action.payload };
  });
});

export const deetailsLoading = createReducer(false, builder => {
  builder
    .addCase(getCharacterDetailsRequest, (_, action) => true)
    .addCase(getCharacterDetailsSuccess, (_, action) => false)
    .addCase(getCharacterDetailsFailuer, (_, action) => false);
});

export const detailsError = createReducer(null, builder => {
  builder.addCase(getCharacterDetailsFailuer, (_, action) => action.payload);
});
