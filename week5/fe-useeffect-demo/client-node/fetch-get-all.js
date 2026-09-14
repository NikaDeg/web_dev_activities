
const apiUrl = 'http://localhost:4000/api/blogs';

const fetchBlogs = async () => {
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data);
}

fetchBlogs()


