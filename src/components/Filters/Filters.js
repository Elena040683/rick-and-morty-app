import React from 'react';
import Species from './Category/Species';
import Status from './Category/Status';

export const Filters = ({ setStatus, setPageNumber }) => {
  return (
    <div className="col mb-3">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        style={{ cursor: 'pointer' }}
        className="text-center text-primery text-decoration-underline mb-4"
      >
        Clear Filter
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species />
      </div>
    </div>
  );
};
