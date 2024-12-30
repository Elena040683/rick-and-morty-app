import { Filters } from '../Filters/Filters';
import { Cards } from '../Cards/Cards';
import { useCallback, useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Paginate from '../Pagination/Paginate';
//import { fetchAllCharactersApi } from '../../services/fetchDataApi';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/characters/operations';
import {
  charactersInfo,
  charactersResults,
  loadingAllCharacters,
} from '../../redux/characters/selectors';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');

  //const [fetchData, setFetchData] = useState({}); //перенесено в redux
  //let { info, results } = fetchData;

  const info = useSelector(charactersInfo);
  const results = useSelector(charactersResults);
  const isLoading = useSelector(loadingAllCharacters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(pageNumber, status, species));

    // fetchAllCharactersApi(pageNumber, status, species)
    //   .then(res => {
    //     setIsLoading(true);
    //     setFetchData(res);
    //   })
    //   .catch(error => setError(error.message))
    //   .finally(() => setIsLoading(false));
  }, [pageNumber, status, species, dispatch]);

  const hadleChangePage = useCallback(
    pageNumber => {
      setPageNumber(pageNumber);
    },
    [pageNumber],
  );

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

          <Paginate
            onPageChange={hadleChangePage}
            currentPage={pageNumber}
            numberOfPages={info.pages}
          />
        </div>
      )}
    </>
  );
};

export default Home;
