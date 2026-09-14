const apiUrl = "http://localhost:4000/api/blogs";

const blog = {
  title: "Good day 2026-11-18",
  body: "here is the body",
  author: "Sami",
};


const addBlog = async () => {

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(blog),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  console.log(json);

};

addBlog();

