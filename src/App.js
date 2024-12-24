import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Filters } from './components/Filters/Filters';
import { Cards } from './components/Cards/Cards';
import { useEffect, useState } from 'react';

import axios from 'axios';
import Paginanion from './components/Pagination/Paginanion';
import Preloader from './components/Loader/Loader';

const BASE_URL = 'https://rickandmortyapi.com/api';
axios.defaults.baseURL = BASE_URL;

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  // console.log(pageNumber)
  const [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData;
  console.log(fetchData);
  let endpoint = 'character';
  let params = `?page=${pageNumber}&status=${status}&species=${species}`;
  let url = endpoint + params;

  const getInfoFromApi = async () => {
    try {
      const response = await axios
        .get(url)
        .then(result => {
          setFetchData(result.data);
        })
        .finally(() => setIsLoading(false));
      if (response.status === 200) return response;
      if (response.status === 400) throw new Error();
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const data = getInfoFromApi();
    setFetchData(data);
  }, [url]);

  return (
    <>
      <h1 className="text-center my-4 ff">Rick and Morty application</h1>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <div className="container-md center-block">
            <div className="row justify-content-center">
              <Filters
                setStatus={setStatus}
                setSpecies={setSpecies}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>

          <div className="container-md text-center">
            <div className="row mx-auto">
              <Cards results={results} />
            </div>
          </div>

          <Paginanion
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            info={info}
          />
        </div>
      )}
    </>
  );
}

export default App;
