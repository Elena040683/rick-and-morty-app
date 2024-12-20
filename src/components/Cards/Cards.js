import React from 'react';
import s from './Cards.module.scss';

export const Cards = ({ results }) => {

  let display
  if (results) {
    display = results.map(({ id, name, image, location, stutus }) => {
      return (
        <div key={id} className='col-4 mb-4'>
          <div className={s.cards}>
            <img src={image} alt="img" className={`${s.img} img-fluid`} />
            <div className="">content</div>
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className="">
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>

          </div>
        </div>)
    })
  } else {
    display = "No Characters Found"
  }

  console.log(results)
  return (
    <>
      {display}
    </>
  )
}