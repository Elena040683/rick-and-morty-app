import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFailure,
} from './actions';

import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
axios.defaults.baseURL = BASE_URL;

export const getData = (pageNumber, status, species) => {
  return async dispatch => {
    dispatch(getCharactersRequest());
    try {
      const response = await axios.get(
        `/character?page=${pageNumber}&status=${status}&species=${species}`,
      );
      if (response.data) {
        console.log(response.data); // получили данные с API
        dispatch(getCharactersSuccess(response.data));
      } else {
        dispatch(getCharactersFailure('No data received'));
      }
    } catch (error) {
      alert('Sorry, something went wrong.');
      dispatch(getCharactersFailure(error.message));
    }
  };
};
