import { createReducer } from '@reduxjs/toolkit';
import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFailure,
} from './actions';

export const allCharacters = createReducer({}, builder => {
  builder.addCase(getCharactersSuccess, (state, action) => {
    return { ...state, ...action.payload };
  });
});

export const loading = createReducer(false, builder => {
  builder
    .addCase(getCharactersRequest, (_, action) => true)
    .addCase(getCharactersSuccess, (_, action) => false)
    .addCase(getCharactersFailure, (_, action) => false);
});

export const error = createReducer(null, builder => {
  builder.addCase(getCharactersFailure, (_, action) => action.payload);
});
