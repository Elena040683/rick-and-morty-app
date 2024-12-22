import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginanion = ({ info, pageNumber, setPageNumber }) => {
  return (
    <>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn"
        previousClassName="btn"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        onPageChange={data => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Paginanion;
