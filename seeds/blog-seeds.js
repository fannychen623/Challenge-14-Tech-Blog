// seed data for blog model
const { Blog } = require('../models');

const blogData = [
  {
    title: "GitHub SSH",
    content: "Set up github ssh to connect local device to cloud server.",
    date_created: "2022-10-31 23:00:00",
    user_id: 1
  },
  {
    title: "HTML CSS",
    content: "Front-end coding for web applications.",
    date_created: "2022-11-07 23:00:00",
    user_id: 2
  },
  {
    title: "Advance CSS",
    content: "Reset CSS and CSS frameworks, such as Bulma and Bootstrap, can be used to format application styling.",
    date_created: "2022-11-14 23:00:00",
    user_id: 3
  },
  {
    title: "Web APIs",
    content: "Work with local storage to store user data.",
    date_created: "2022-11-21 23:00:00",
    user_id: 3
  },
  {
    title: "Third Party APIs",
    content: "Use CDN to connect/use third party APIs such as jQuery, CSS frameworks, day.js, etc.",
    date_created: "2022-11-28 23:00:00",
    user_id: 2
  },
  {
    title: "Server Side APIs",
    content: "Use API keys and fetch requests to connect to server side APIs.",
    date_created: "2022-12-05 23:00:00",
    user_id: 3
  },
  {
    title: "Node JS",
    content: "Use node to run CLI applications.",
    date_created: "2022-12-12 23:00:00",
    user_id: 2
  },
  {
    title: "Object-Oriented Programming (OOP)",
    content: "Create classes and corresponding test files for test driven programming.",
    date_created: "2022-12-19 23:00:00",
    user_id: 1
  },
  {
    title: "Express",
    content: "NPM express package connects to server and runs API functions. ",
    date_created: "2023-01-02 23:00:00",
    user_id: 1
  },
  {
    title: "SQL",
    content: "Connect a server to a database used to store data.",
    date_created: "2023-01-09 23:00:00",
    user_id: 3
  },
  {
    title: "Object-Relational Mapping (ORM)",
    content: "Connect models to database and establish object relations.",
    date_created: "2023-01-16 23:00:00",
    user_id: 3
  }
];

const seedCategories = () => Blog.bulkCreate(blogData);

module.exports = seedCategories;