import { createAction } from '@reduxjs/toolkit';

// pending
export const getCharactersRequest = createAction('getCharacters_request');
// resolved
export const getCharactersSuccess = createAction('getCharacters_success');
// rejected
export const getCharactersFailure = createAction('getCharacters_failuer');

export const filterStatus = createAction('filter_status');
export const filterSpecies = createAction('filter_species');
