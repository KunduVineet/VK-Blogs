import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
import './Blogs.css';
import { BlogDetails } from "../components/BlogDetails";


export const Blogs = () => {
  const { loading, post } = useContext(AppContext);

  return (
    <div className="Blogs">
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : post.length === 0 ? (
        <div className="no-post">No Post Found</div>
      ) : (
        post.map((post) => (
         <BlogDetails key={post.id} post={post} />
        ))
      )}
    </div>
  );
};
