const express = require('express');
const router = express.Router();

const {
    getAllBlogs,
    createBlog,
    getBlogById,
    deleteBlog,
} = require("../controllers/blogControllers");

// GET /blogs
router.get("/", getAllBlogs);

// POST /blogs
router.post("/", createBlog);

// GET /blogs/:blogId
router.get("/:blogId", getBlogById);

// DELETE /blogs/:blogId
router.delete("/:blogId", deleteBlog);

module.exports = router;