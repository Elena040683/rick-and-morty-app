import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginanion = ({ info, pageNumber, setPageNumber }) => {
  return (
    <>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        nextclassNameName="btn"
        previousclassNameName="btn"
        pageclassNameName="page-item"
        pageLinkclassNameName="page-link"
        activeclassNameName="active"
        htmlForcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        onPageChange={data => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Paginanion;
