import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        // Simulate a 3000ms delay
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const res = await fetch("/api/blogs");
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }

        const data = await res.json();

        setIsPending(false);
        setBlogs(data);
        setError(null);
      } catch (err) {
        // Auto-catches network/connection error
        setIsPending(false);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("/api/blogs")
  //       .then(res => {
  //         if (!res.ok) { // error coming back from server
  //           throw Error('could not fetch the data for that resource');
  //         }
  //         return res.json();
  //       })
  //       .then(data => {
  //         setIsPending(false);
  //         setBlogs(data);
  //         setError(null);
  //       })
  //       .catch(err => {
  //         // auto catches network / connection error
  //         setIsPending(false);
  //         setError(err.message);
  //       })
  //   }, 5000);
  // }, [])

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;

