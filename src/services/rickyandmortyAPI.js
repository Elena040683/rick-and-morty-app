import React from 'react'
import axios from "axios";

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getInfoFromApi = async ({ page }) => {
  axios.defaults.baseURL = BASE_URL;
  let endpoint = 'character';
  let params = `?page=${page}`;
  let url = endpoint + params;

  try {
    const response = await axios.get(url);
    if (response.status === 400) throw new Error();
    if (response.status === 200) return response;
  } catch (error) {
    return error.message;
  }
}