const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// post request to Blog model
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog= await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Put request to update Blog
router.put('/:id', withAuth, async (req, res) => {
  try {
    // update blog with matching id parameter
    const blogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete request for Blog model
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // remove data with matching blog id
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
