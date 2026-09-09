const Blog = require("../models/blogModel");

 // GET /blogs with try..catch
 const getAllBlogs = async (req, res) => {
    try { 
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve blogs" });
  }

 };

// POST /blogs with try..catch
const createBlog = async (req, res) => {
    try {
        const newBlog= await Blog.create({ ...req.body });
        res.status(201).json(newBlog);
    } catch {
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: "Invalid input", error: error.message });
        } else {
            res.status(500).json({ message: "Failed to create blog", error: error.message });
        }
    }
  
};


// GET /blogs/:blogId with try..catch
const getBlogById = async (req, res) => {

    const { blogId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return res.status(400).json({ message: "Invalid blog ID" });
    }

    try {
        const blog = await Blog.findById(blogId);
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({ message: "Blog not found" });
        }

    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve blogs" });
  }

};

// DELETE /blogs/:blogId. with try..catch
const deleteBlog = async (req, res) => {

    const { blogId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return res.status(400).json({ message: "Invalid blog ID" });
    }
    try {
        const deletedBlog = await Blog.findOneAndDelete({ _id: blogId });
        if (deletedBlog) {
            res.status(200).json({ message: "Blog deleted successfully" });
        } else {
            res.status(404).json({ message: "Blog not found" });
        }

    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve blog" });
  }
  
};

module.exports = {
    getAllBlogs,
    createBlog,
    getBlogById,
    deleteBlog,
}