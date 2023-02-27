const router = require('express').Router();
const { Blog, User, Comment } = require('../models');

// helper function to check that user is logged in
const withAuth = require('../utils/auth');

// get request for homepage
router.get('/', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogs, 
      dashboard: false,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get request for individual blogs
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    // Get all blogs and JOIN with user and comment data
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment, 
            include: [
              {
                model: User,
                attributes: ['username'],
              }
            ] ,
        }
      ],
    });

    // Serialize data so the template can read it
    const blog = blogData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('commentBlog', {
      blog,
      dashboard: false,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    // Serialize data so the template can read it
    const user = userData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      ...user,
      dashboard: true,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    // Serialize data so the template can read it
    const blog = blogData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('updateBlog', {
      blog,
      dashboard: true,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Pass session flag into template
router.get('/newBlog', (req, res) => {
  res.render('newBlog', {
    dashboard: true,
    logged_in: true
  });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }
  res.render('signup');
});

module.exports = router;
