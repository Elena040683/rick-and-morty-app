import React from 'react';

const FilterButton = ({ name, index, item, task, setPageNumber }) => {
  return (
    <div>
      <div className="htmlForm-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(item); //update api in App
          }}
          className="htmlForm-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
