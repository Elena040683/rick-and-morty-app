import { ArrowLastLeft } from '../../asserts/icons/ArrowLastLeft';
import { ArrowLastRight } from '../../asserts/icons/ArrowLastRight';
import { ArrowLeft } from '../../asserts/icons/ArrowLeft';
import { ArrowRight } from '../../asserts/icons/ArrowRight';
import { useCallback } from 'react';
import Pagination from 'react-bootstrap/Pagination';

export const PaginationList = ({
  numberOfPages,
  currentPage,
  paginationItems,
  onPageChange,
}) => {

  const handlePageClick = useCallback(
    (item) => {
      onPageChange(item);
    },
    [onPageChange]
  );

  return (
    <Pagination className="justify-content-between">
      <Pagination.First className="me-1" disabled={currentPage === 1} onClick={() => onPageChange(1)}>
        <ArrowLastLeft disabled={currentPage === 1} />
      </Pagination.First>
      <Pagination.Prev
        className="me-1"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft disabled={currentPage === 1} />
      </Pagination.Prev>
      {paginationItems}
      <Pagination.Next
        className="me-1"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === numberOfPages}
      >
        <ArrowRight disabled={currentPage === numberOfPages} />
      </Pagination.Next>
      <Pagination.Last disabled={currentPage === numberOfPages} onClick={() => handlePageClick(numberOfPages)}>
        <ArrowLastRight disabled={currentPage === numberOfPages} />
      </Pagination.Last>
    </Pagination>
  );
};
