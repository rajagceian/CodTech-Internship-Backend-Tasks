const { Blog } = require('../models');

exports.createBlog = async (req, res) => {
    const blog = await Blog.create({ ...req.body, UserId: req.user.id });
    res.json(blog);
};

exports.getAllBlogs = async (req, res) => {
    const blogs = await Blog.findAll({ include: ['User'] });
    res.json(blogs);
};
