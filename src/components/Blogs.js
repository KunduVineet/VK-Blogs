import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
import './Blogs.css';

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
          <div key={post.id}>
            <p className="font-bold">{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index) => (
                <span key={index}>{`#${tag}`}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
