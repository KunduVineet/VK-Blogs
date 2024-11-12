import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Pagination.css';

export const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="pagination-container">
      <div className="pagination-buttons">
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
        <p className="page-info">Page {page} of {totalPages}</p>
      </div>
    </div>
  );
};
