import {
  getCharacterDetailsRequest,
  getCharacterDetailsSuccess,
  getCharacterDetailsFailuer,
} from './actions';

import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
axios.defaults.baseURL = BASE_URL;

export const getSingleCharacterDetails = id => {
  return async dispatch => {
    dispatch(getCharacterDetailsRequest());
    try {
      const response = await axios.get(`/character/${id}`);
      if (response.data) {
        console.log(response.data);
        dispatch(getCharacterDetailsSuccess(response.data));
      } else {
        dispatch(getCharacterDetailsFailuer('No data recieved'));
      }
    } catch (error) {
      alert('Sorry, something went wrong.');
      dispatch(getCharacterDetailsFailuer(error.message));
    }
  };
};
