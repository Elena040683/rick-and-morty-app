import {  useCallback, useEffect, useMemo } from 'react';
import PaginationComponent from 'react-bootstrap/Pagination';
import { PaginationList } from './PaginationList';

 const Pagination = ({
  currentPage,
  numberOfPages,
  onPageChange,
  hasScrollToBottom = true,
}) => {
  useEffect(() => {
    if (!hasScrollToBottom || currentPage === 1) return;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'instant',
    });
  }, [currentPage, hasScrollToBottom]);

  const handlePageItemClick = useCallback(
    item => {
      onPageChange(item);
    },
    [onPageChange]
  );

  const paginationItems = useMemo(() => {
    const arrayOfItems = Array.from({ length: numberOfPages }, (_, index) => index + 1);

    if (arrayOfItems.length > 5) {
      return arrayOfItems.map((item, index) => {
        if ((currentPage <= 3 && item <= 3) || item > arrayOfItems.length - 2) {
          return (
            <PaginationComponent.Item
              key={index}
              active={item === currentPage}
              onClick={() => handlePageItemClick(item)}
            >
              {item > 3 && item <= arrayOfItems.length - 2 ? (
                <PaginationComponent.Ellipsis key="start-ellipsis" />
              ) : null}
              {item}
            </PaginationComponent.Item>
          );
        } else if (
          (currentPage > 3 && currentPage - 1 === item) ||
          (currentPage > 3 && currentPage - 2 === item) ||
          (currentPage > 3 && currentPage === item)
        ) {
          return (
            <PaginationComponent.Item
              key={index}
              active={item === currentPage}
              onClick={() => handlePageItemClick(item)}
            >
              {item}
            </PaginationComponent.Item>
          );
        } else if ((currentPage <= 3 && item === 4) || (currentPage > 3 && item === currentPage + 1)) {
          return <PaginationComponent.Ellipsis key="middle-ellipsis" disabled />;
        } else {
          return null;
        }
      });
    } else {
      return arrayOfItems.map((item, index) => {
        return (
          <PaginationComponent.Item
            active={item === currentPage}
            onClick={() => handlePageItemClick(item)}
            key={index}
            className="me-1"
            data-testid={`pageItem-${index + 1}`}
          >
            {item}
          </PaginationComponent.Item>
        );
      });
    }
  }, [numberOfPages, currentPage, handlePageItemClick]);

  if (numberOfPages <= 1) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center">
      <PaginationList
        paginationItems={paginationItems}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Pagination;