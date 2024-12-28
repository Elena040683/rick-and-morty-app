import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFailure,
} from './actions';

import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
axios.defaults.baseURL = BASE_URL;

export const getData = (pageNumber, status, species) => {
  let endpoint = `character?page=${pageNumber}&status=${status}&species=${species}`;
  return async dispatch => {
    dispatch(getCharactersRequest());
    try {
      const response = await axios.get(endpoint);
      if (response.data) {
        console.log(response.data); // получили данные с API
        dispatch(getCharactersSuccess(response.data));
      } else {
        dispatch(getCharactersFailure('No data received'));
      }
    } catch (error) {
      dispatch(getCharactersFailure(error.message));
    }
  };
};
