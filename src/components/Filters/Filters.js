import React from 'react';
import Species from './Category/Species';
import Status from './Category/Status';

export const Filters = ({ setStatus, setPageNumber, setSpecies }) => {
  const clear = () => {
    setStatus('');
    setPageNumber('');
    setSpecies('');
    window.location.reload(false);
  }
  return (
    <div className="col-5 mb-3">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className="text-center text-primery text-decoration-underline mb-4"
      >
        Clear Filter
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};
