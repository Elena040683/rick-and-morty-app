import React from 'react';
import FilterButton from '../FilterButton';

const Status = ({ setStatus, setPageNumber }) => {
  let status = ['Alive', 'Dead', 'Unknown'];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <FilterButton
              key={index}
              name="status"
              index={index}
              item={item}
              task={setStatus}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
