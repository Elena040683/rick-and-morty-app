import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCardApi } from '../../services/fetchDataApi';

const Details = () => {

  const [characterDetails, setCharacterDetails] = useState({});
  const [error, setError] = useState(null);

  let { name, status, species, type, gender, location, image } = characterDetails;

  const navigate = useNavigate();
  const params = useParams()

  useEffect(() => {
    fetchCardApi(params.id)
      .then(res => setCharacterDetails(res))
      .catch(error => setError(error.message))
  }, [params.id]);

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className="container">
      <header>
        <button
          type="button"
          className="btn btn-primary my-4"
          onClick={handleClick}
        >
          back
        </button>
        <h2> Character's name: {name}</h2>
      </header>

      <main>
        <img src={image} alt="photo" />
        <div className="fs-6">
          <p className="fs-6">Status: {status}</p>
          <p className="fs-6">Type: {type}</p>
          <p className="fs-6">Species: {species}</p>
          <p className="fs-6">Gender: {gender}</p>
          <p className="fs-6">Location: {location?.name}</p>
        </div>
      </main>
    </div>
  );
}

export default Details
