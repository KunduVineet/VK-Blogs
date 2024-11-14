import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Blogs } from '../components/Blogs';
import { Pagination } from '../components/Pagination';
import './TagPage.css';

export const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="tag-page">
      <Header />
      <div>
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h2>Blogs Tagged <span>#{tag}</span></h2>
      </div>
      <div className="blogs">
        <Blogs />
      </div>
      <div className="pagination">
        <Pagination />
      </div>
    </div>
  );
};
