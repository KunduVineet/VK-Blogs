import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Blogs } from '../components/Blogs';
import { Pagination } from '../components/Pagination';
import "./CategoryPage.css";

export const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div className="category-page">
      <Header />
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h2>
          Blogs on <span className="category-name">{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};
