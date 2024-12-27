import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCardApi } from '../../services/fetchDataApi';

const Details = () => {
  const [characterDetails, setCharacterDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let { name, status, species, type, gender, origin, location, image } =
    characterDetails;

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetchCardApi(params.id)
      .then(res => {
        setIsLoading(true);
        setCharacterDetails(res);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      {characterDetails ? (
        <div className="container d-flex justify-content-center">
          <div className="d-flex flex-column gap-4">
            <header>
              <button
                type="button"
                className="btn btn-primary my-4"
                onClick={handleClick}
              >
                back
              </button>
              <h2 className="text-center text-primery">
                Character's name: {name}
              </h2>
            </header>
            <main className="d-flex justify-content-center flex-column">
              <img src={image} alt="photo" />
              <div className="fs-6">
                <p className="text-center fs-6">Status: {status}</p>
                <p className="text-center fs-6">
                  Type:
                  {type === '' ? ' Unknown' : type}
                </p>
                <p className="text-center fs-6">Species: {species}</p>
                <p className="text-center fs-6">Gender: {gender}</p>
                <p className="text-center fs-6">Origin: {origin?.name}</p>
                <p className="text-center fs-6">Location: {location?.name}</p>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <p>No match found</p>
      )}
    </>
  );
};

export default Details;
