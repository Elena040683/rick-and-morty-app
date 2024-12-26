import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
axios.defaults.baseURL = BASE_URL;

export const fetchAllCharactersApi = async (pageNumber, status, species) => {
  let endpoint = `character?page=${pageNumber}&status=${status}&species=${species}`

  try {
    const result = await axios.get(endpoint);
    const data = result.data;
    if (result.status === 200) return data;
    if (result.status === 400) throw new Error();
  } catch (error) {
    return error.massage
  }
}

export const fetchCardApi = async (id) => {
  let endpoint = `character/${id}`

  try {
    const result = await axios.get(endpoint);
    const data = result.data;
    if (result.status === 200) return data;
    if (result.status === 400) throw new Error();
  } catch (error) {
    return error.massage
  }
}
