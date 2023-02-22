const { Comment } = require('../models');

const commentData = [
  {
    comments: "comment 1",
    date_created: "2023-02-01 23:50:26",
    user_id: 1,
    blog_id: 1
  },
  {
    comments: "comment 2",
    date_created: "2023-02-03 23:50:26",
    user_id: 2,
    blog_id: 2
  },
  {
    comments: "comment 3",
    date_created: "2023-02-05 23:50:26",
    user_id: 3,
    blog_id: 2
  },
  {
    comments: "comment 4",
    date_created: "2023-02-07 23:50:26",
    user_id: 3,
    blog_id: 3
  },
  {
    comments: "comment 5",
    date_created: "2023-02-10 23:50:26",
    user_id: 2,
    blog_id: 5
  },
  {
    comments: "comment 6",
    date_created: "2023-02-11 23:50:26",
    user_id: 1,
    blog_id: 5
  },
  {
    comments: "comment 7",
    date_created: "2023-02-12 23:50:26",
    user_id: 1,
    blog_id: 4
  },
  {
    comments: "comment 8",
    date_created: "2023-02-13 23:50:26",
    user_id: 2,
    blog_id: 3
  },
  {
    comments: "comment 9",
    date_created: "2023-02-15 23:50:26",
    user_id: 3,
    blog_id: 1
  }
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;