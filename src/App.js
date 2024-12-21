import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Filters } from "./components/Filters/Filters";
import { Cards } from "./components/Cards/Cards";
import { useEffect, useState } from "react";

import axios from "axios";

const BASE_URL = 'https://rickandmortyapi.com/api';
axios.defaults.baseURL = BASE_URL;

function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData;

  let endpoint = 'character';
  let params = `?page=${pageNumber}`;
  let url = endpoint + params;

  const getInfoFromApi = async () => {
    try {
      const response = await axios.get(url)
        .then(result => {
          setFetchData(result.data);
        })

      if (response.status === 200) return response;
      if (response.status === 400) throw new Error();
    } catch (error) {
      return error.message;
    }
  }

  useEffect(() => {
    getInfoFromApi();
  }, [url]);

  return (
    <div className="App">
      <h1 className="text-center my-4 ff">
        Rick and Morty application
      </h1>
      <div className="container text-center">
        <Filters />
      </div>

      <div className="container text-center">
        <div className="row">
          <Cards results={results} />
        </div>
      </div>

    </div>

  );
}

export default App;
