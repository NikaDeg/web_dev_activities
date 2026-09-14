const apiUrl = "http://localhost:4000/api/blogs";
const blogId = "69847d9ff3b6913da93b0187";

const updatedData = {
  body: "here is updated body",
};


const updateBlog = async (blogId, updatedData) => {

  const response = await fetch(`${apiUrl}/${blogId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error("Failed to update the blog");
    // console.log("Sorry");
    
  }

  const updatedBlog = await response.json();
  console.log("Blog updated:", updatedBlog);
};












// const updateBlog = async (blogId, updatedData) => {
//   try {
//     const response = await fetch(`${apiUrl}/${blogId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update the blog");
//     }

//     const updatedBlog = await response.json();
//     console.log("Blog updated:", updatedBlog);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

updateBlog(blogId, updatedData);

