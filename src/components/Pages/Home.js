import { Filters } from '../Filters/Filters';
import { Cards } from '../Cards/Cards';
import { useEffect, useState } from 'react';
import Paginanion from '../Pagination/Paginanion';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { fetchAllCharactersApi } from '../../services/fetchDataApi';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [error, setError] = useState(null);
  const [fetchData, setFetchData] = useState([]);

  let { info, results } = fetchData;

  useEffect(() => {
    fetchAllCharactersApi(pageNumber, status, species)
      .then(res => {
        setIsLoading(true);
        setFetchData(res);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [pageNumber, status, species]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-center fw-bold fs-3 mt-3">Rick and Morty app</h1>
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
};

export default Home;
