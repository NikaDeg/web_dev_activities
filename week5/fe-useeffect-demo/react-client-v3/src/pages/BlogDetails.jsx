import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {

  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/api/blogs/${id}`);
      console.log(`/api/blogs/${id}`);
      const json = await response.json();

      if (response.ok) {
        setBlog(json);
      }
    };

    fetchBlog();
  }, [id]);


  const handleClick = async () => {
    try {
      await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      navigate("/");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // const handleClick = () => {
  //   fetch(`/api/blogs/${id}`, {
  //     method: "DELETE",
  //   }).then(() => {
  //     navigate("/");
  //   });
  // };

  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

