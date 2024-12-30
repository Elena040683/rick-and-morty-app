import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//import { fetchCardApi } from '../../services/fetchDataApi';
import { CharacterDetailsView } from './CharacterDetailsView';
import Loader from '../Loader/Loader';
import { getSingleCharacterDetails } from '../../redux/characterDetails/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  characterDetailsData,
  characterDetailsLoading,
  characterDetailsError,
} from '../../redux/characterDetails/selectors';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

const Details = () => {
  // const [characterDetails, setCharacterDetails] = useState({});
  // const [error, setError] = useState(null);
  // const [status, setStatus] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const details = useSelector(characterDetailsData);
  const isLoading = useSelector(characterDetailsLoading);
  const error = useSelector(characterDetailsError);

  useEffect(() => {
    dispatch(getSingleCharacterDetails(params.id));
    // if (!characterDetails) {
    //   // Первый рендер, это пустой объект, не делаем fetch
    //   return;
    // }

    // setStatus(Status.PENDING);

    // fetchCardApi(params.id)
    //   .then(res => {
    //     setCharacterDetails(res);
    //     setStatus(Status.RESOLVED);
    //   })
    //   .catch(error => {
    //     setError(error.message);
    //     setStatus(Status.REJECTED);
    //   });
  }, [params.id, dispatch]);

  const handleClick = () => {
    navigate('/');
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return error.message;
  }

  if (details) {
    return <CharacterDetailsView data={details} handleClick={handleClick} />;
  }
};

export default Details;
