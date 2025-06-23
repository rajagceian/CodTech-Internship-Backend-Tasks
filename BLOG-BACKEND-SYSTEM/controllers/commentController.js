const { Comment } = require('../models');

exports.createComment = async (req, res) => {
    const comment = await Comment.create({ ...req.body, UserId: req.user.id });
    res.json(comment);
};

exports.getComments = async (req, res) => {
    const comments = await Comment.findAll({ where: { BlogId: req.params.blogId } });
    res.json(comments);
};
