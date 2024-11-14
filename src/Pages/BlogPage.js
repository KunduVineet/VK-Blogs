import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Header } from "../components/Header";
import { BlogDetails } from "../components/BlogDetails";

export const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("URL IS :", url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error while fetching related blogs", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [blogId]);

  return (
    <div className="blog-page">
      <Header />
      <div>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <div className="related-blogs">
            <h3>Related Blogs</h3>
            {relatedBlogs.map((relatedPost) => (
              <div key={relatedPost.id} className="related-post">
                <BlogDetails post={relatedPost} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="no-post">
          <p>No blog or related content found.</p>
        </div>
      )}
    </div>
  );
};
