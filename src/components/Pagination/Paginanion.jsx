import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

const Paginanion = ({ info, pageNumber, setPageNumber }) => {
  const pageQuantity = Math.ceil(info?.pages / 1)
  return (
    <>
      <ReactPaginate
        className={`${s.pag} pagination justify-content-center gap-4 my-4`}
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
        pageCount={pageQuantity ? pageQuantity : 1}
        
      />
    </>
  );
};

export default Paginanion;
