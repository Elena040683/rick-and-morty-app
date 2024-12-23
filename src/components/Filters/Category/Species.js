import React from 'react'
import FilterButton from '../FilterButton'

const Species = () => {
  let species = ["Alien", "Human"]
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap">
          {species.map((items, index) => (
            <FilterButton key={index} name="species" index={index} items={items} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Species
