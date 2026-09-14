import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;

