import React from 'react';
import s from './Cards.module.scss';

export const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map(({ id, name, image, location, status, species }) => {
      return (
        <div key={id} className="col-xl-2 col-lg-3 col-md-4">
          <div className={`${s.cards} mb-3 d-flex flex-column`}>
            <img src={image} alt="img" className={`${s.img} img-fluid`} />
            <p className="fs-5 fw-medium mb-1">{name}</p>
            {(() => {
              if (status === 'Dead') {
                return (
                  <p className="fs-6">
                    <span
                      className={`${s.status} badge rounded-pill text-bg-danger`}
                    >
                      {' '}
                    </span>
                    {status}
                  </p>
                );
              } else if (status === 'Alive') {
                return (
                  <p className="fs-6">
                    <span
                      className={`${s.status} badge rounded-pill text-bg-success`}
                    >
                      {' '}
                    </span>
                    {status}
                  </p>
                );
              } else {
                return (
                  <p className="fs-6">
                    <span
                      className={`${s.status} badge rounded-pill text-bg-secondary`}
                    >
                      {' '}
                    </span>
                    {status}
                  </p>
                );
              }
            })()}
            <p className="fs-6">{species}</p>
            <p className="fs-6">Last Location</p>
            <p className="fs-6 mb-3">{location.name}</p>
          </div>
        </div>
      );
    });
  } else {
    <p>No Characters Found</p>;
  }

  return <>{display}</>;
};
