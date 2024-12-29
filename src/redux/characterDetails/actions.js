import { createAction } from '@reduxjs/toolkit';

export const getCharacterDetailsRequest = createAction(
  'getCharacterDetails_request',
);
export const getCharacterDetailsSuccess = createAction(
  'getCharacterDetails_success',
);
export const getCharacterDetailsFailuer = createAction(
  'getCharacterDetails_failuer',
);
