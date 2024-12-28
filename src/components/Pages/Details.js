import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCardApi } from '../../services/fetchDataApi';
import { CharacterDetailsView } from './CharacterDetailsView';
import ErrorView from './ErrorView';
import Loader from '../Loader/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Details = () => {
  const [characterDetails, setCharacterDetails] = useState({});
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!characterDetails) {
      // Первый рендер, это пустой объект, не делаем fetch
      return;
    }

    setStatus(Status.PENDING);

    fetchCardApi(params.id)
      .then(res => {
        setCharacterDetails(res);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error.message);
        setStatus(Status.REJECTED);
      });
  }, [params.id]);

  const handleClick = () => {
    navigate('/');
  };

  if (status === Status.IDLE) {
    return <div>Go ahead...</div>;
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <ErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <CharacterDetailsView
        characterDetails={characterDetails}
        handleClick={handleClick}
      />
    );
  }
};

export default Details;
