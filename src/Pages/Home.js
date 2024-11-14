import React from 'react';
import { Header } from '../components/Header';
import { Blogs } from '../components/Blogs';
import { Pagination } from '../components/Pagination';
import './Home.css'; // Make sure to import the CSS file

export const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};
