import React from 'react';
import { NavLink } from 'react-router-dom';
import './Blogs.css'; // Ensure you import the stylesheet here

export const BlogDetails = ({ post }) => {
  return (
    <div className="blog-details">
      <NavLink to={`/blog/${post.id}`} className="blog-title">
        <span>{post.title}</span>
      </NavLink>
      <p className="blog-meta">
        By <span className="blog-author">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} className="blog-category">
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p className="blog-date">Posted on {post.date}</p>
      <p className="blog-content">{post.content}</p>
      <div className="blog-tags">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`} className="blog-tag">
            <span>{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
