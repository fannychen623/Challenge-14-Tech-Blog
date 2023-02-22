const { Blog } = require('../models');

const blogData = [
  {
    title: "Blog Post 1",
    content: "Sample Content 1.",
    date_created: "2023-02-01 23:50:26",
    user_id: 1
  },
  {
    title: "Blog Post 2",
    content: "Sample Content 2.",
    date_created: "2023-02-01 23:50:26",
    user_id: 2
  },
  {
    title: "Blog Post 3",
    content: "Sample Content 3.",
    date_created: "2023-02-02 23:50:26",
    user_id: 3
  },
  {
    title: "Blog Post 4",
    content: "Sample Content 4.",
    date_created: "2023-02-03 23:50:26",
    user_id: 3
  },
  {
    title: "Blog Post 5",
    content: "Sample Content 5.",
    date_created: "2023-02-04 23:50:26",
    user_id: 2
  }
];

const seedCategories = () => Blog.bulkCreate(blogData);

module.exports = seedCategories;