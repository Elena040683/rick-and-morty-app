import React from 'react';


const FilterButton = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <div className="htmlForm-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(items);    //update api in App
          }}
          className="htmlForm-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
