import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const fetchData = async () => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    setBlogs(data);
    console.log(data);
  };

  return (
    <div className="home">
      <button onClick={fetchData}>Load Blogs</button>

      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;

