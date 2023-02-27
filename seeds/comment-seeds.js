// seed data for comment model
const { Comment } = require('../models');

const commentData = [
  {
    comments: "Super useful! Although it was very confusing to set up.",
    date_created: "2022-11-01 23:00:00",
    user_id: 2,
    blog_id: 1
  },
  {
    comments: "I use it everyday. Also usefule to set up for other cloud servers.",
    date_created: "2022-11-02 23:00:00",
    user_id: 3,
    blog_id: 1
  },
  {
    comments: "I would recommend also using a css framework in combination to make designing easier.",
    date_created: "2022-11-08 23:00:00",
    user_id: 3,
    blog_id: 2
  },
  {
    comments: "I like bulma more than bootstrap.",
    date_created: "2022-11-15 23:00:00",
    user_id: 1,
    blog_id: 3
  },
  {
    comments: "Foundation is also another CSS framework you can use. Although it is harder to use in my opinion.",
    date_created: "2022-11-15 23:00:00",
    user_id: 2,
    blog_id: 3
  },
  {
    comments: "Adding a reset.css file can help you sync your styles across different browser types.",
    date_created: "2022-11-16 23:00:00",
    user_id: 1,
    blog_id: 3
  },
  {
    comments: "You can clear your local storage by clearing cache and coookies.",
    date_created: "2022-11-22 23:00:00",
    user_id: 1,
    blog_id: 4
  },
  {
    comments: "Does it glitch sometimes? I feel like sometimes I lose my local storage...",
    date_created: "2022-11-22 23:00:00",
    user_id: 2,
    blog_id: 4
  },
  {
    comments: "Love jQuery, so much easier and clearer than vanilla javascript.",
    date_created: "2022-11-30 23:00:00",
    user_id: 1,
    blog_id: 5
  },
  {
    comments: "I liked jQuery but stopped using it after creating more complicated applications.",
    date_created: "2022-12-01 23:00:00",
    user_id: 3,
    blog_id: 5
  },
  {
    comments: "Switching between jQuery and vanilla javasctipt is a little confusing, especially since I combine using both.",
    date_created: "2022-12-02 23:00:00",
    user_id: 1,
    blog_id: 5
  },
  {
    comments: "Sometimes it's better to just install the API than using CDNs since you don't want to risk the API being down.",
    date_created: "2022-12-02 23:00:00",
    user_id: 2,
    blog_id: 5
  },
  {
    comments: "I like the Google Maps API, there's just so much you can do with it.",
    date_created: "2022-12-05 23:00:00",
    user_id: 2,
    blog_id: 6
  },
  {
    comments: "Some API keys have a fetch limit, that can be troublesome when developing and testing.",
    date_created: "2022-12-06 23:00:00",
    user_id: 3,
    blog_id: 6
  },
  {
    comments: "Not exactly sure how CLI is useful from the consumer standpoint since they don't use it.",
    date_created: "2022-12-13 23:00:00",
    user_id: 1,
    blog_id: 7
  },
  {
    comments: "Super convenient for testing purposes!",
    date_created: "2022-12-14 23:00:00",
    user_id: 3,
    blog_id: 7
  },
  {
    comments: "The node version matters. A lot of stuff aren't working for me when I use v19 but works on v16.",
    date_created: "2022-12-14 23:00:00",
    user_id: 1,
    blog_id: 7
  },
  {
    comments: "Same here, I constantly have to switch between v18 and v16 because of different projects.",
    date_created: "2022-12-15 23:00:00",
    user_id: 2,
    blog_id: 7
  },
  {
    comments: "Test files has got to be the most confusing thing to work with.",
    date_created: "2022-12-20 23:00:00",
    user_id: 2,
    blog_id: 8
  },
  {
    comments: "Still never really figured out how all this works but it works.",
    date_created: "2022-12-21 23:00:00",
    user_id: 3,
    blog_id: 8
  },
  {
    comments: "Super neat! Super useful package. You really have to read the documentation to userstand its full potential.",
    date_created: "2023-01-03 23:00:00",
    user_id: 2,
    blog_id: 9
  },
  {
    comments: "There's a bunch of sub-packages like express-handlebars and express-session, that are also super useful.",
    date_created: "2023-01-03 23:00:00",
    user_id: 3,
    blog_id: 9
  },
  {
    comments: "You can use programs like Insomia to test your server responses.",
    date_created: "2023-01-04 23:00:00",
    user_id: 2,
    blog_id: 9
  },
  {
    comments: "Use in combination with SQL workbench to assist with the development process.",
    date_created: "2023-01-09 23:00:00",
    user_id: 3,
    blog_id: 10
  },
  {
    comments: "Very useful for storing data. Definitely use with the sequelize package, it makes it so much clearer.",
    date_created: "2023-01-10 23:00:00",
    user_id: 1,
    blog_id: 10
  },
  {
    comments: "Use it with mysql2 package to connect your SQL database to a server.",
    date_created: "2023-01-11 23:00:00",
    user_id: 2,
    blog_id: 10
  },
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;