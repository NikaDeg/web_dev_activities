const apiUrl = "http://localhost:4000/api/blogs";
let id = "698479fef3b6913da93b016a";

const fetchBlog = async () => {

  const response = await fetch(`${apiUrl}/${id}`);
  // console.log(`${apiUrl}/${id}`);
  const data = await response.json();
  console.log(data);
};

fetchBlog();

