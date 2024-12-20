// import axios from "axios";
// const BASE_URL = 'https://rickandmortyapi.com/api';



// const getInfoFromApi = async ({ pageNumber }) => {
//   axios.defaults.baseURL = BASE_URL;
//   let endpoint = 'character';
//   let params = `?page=${pageNumber}`;
//   let url = endpoint + params;
//   try {
//     const response = await axios.get(url)
//       .then(result => {
//         console.log(result.data);
//         return result.data;
//       })
//     if (response.status === 200) return response;
//     if (response.status === 400) throw new Error();
//   } catch (error) {
//     return error.message;
//   }
// }