const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");

const app = express();
dotenv.config();
app.use(cors({ origin: "*" }));
app.use("/public", express.static("./public"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// swagger setUp start here
const swaggerOption = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "practiceAPI",
      description: "Maile api banudai xu",
      contact: {
        name: "Mohan Gurung",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/doc", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));

// routes
//for Home
app.use("/home", (req, res) => {
  res.status(200).json([
    {
      banner: {
        headline: "HOTEL & RESORT",
        title: "Welcome to Roberto",
      },
      aboutUs: {
        headline: "ABOUT US",
        title: "Welcome to Roberto Hotel Luxury",
        description:
          "With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering for a perfect stay no matter where your destination.",
      },
      testimonials: [
        {
          name: "Downey Sarah",
          post: "CEO Deercreative",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          name: "Downey Sarah",
          post: "CEO Deercreative",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          name: "Downey Sarah",
          post: "CEO Deercreative",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
      entertainment: [
        {
          headline: "Racing Bike",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Quisque egestas diam in arcu cursus euismod.",
        },
        {
          headline: "Racing Bike",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Quisque egestas diam in arcu cursus euismod.",
        },
        {
          headline: "Racing Bike",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Quisque egestas diam in arcu cursus euismod.",
        },
      ],
    },
  ]);
});
//Gallery
app.use("/gallery", (res, req) => {
  res.status(200).json([
    {
      headline: "Gallery",
    },
  ]);
});
//Form
app.use("/form", (res, req) => {
  res.status(200).json([
    {
      headline: "Form",
    },
  ]);
});
//service
app.use("/service", (res, req) => {
  res.status(200).json([
    {
      headline: "services",
      price: "125$",
      duration: "Day",
      size: "30 ft",
      capacity: "Max person 5",
      Bed: "King Beds",
      services: "Wifi,Television,Bathroom",
    },
    {
      headline: "services",
      price: "125$",
      duration: "Day",
      size: "30 ft",
      capacity: "Max person 5",
      Bed: "King Beds",
      services: "Wifi,Television,Bathroom",
    },
    {
      headline: "services",
      price: "125$",
      duration: "Day",
      size: "30 ft",
      capacity: "Max person 5",
      Bed: "King Beds",
      services: "Wifi,Television,Bathroom",
    },
  ]);
});
//blogs
app.use("/blogs", (req, res) => {
  res.status(200).json([
    {
      time: "Jan 02, 2019",
      title: "Learn How to Motivitate Yourself",
      paragraph:
        "How many free autoresponders have you tried? And how many emails did you get through using them?",
    },
    {
      time: "Jan 02, 2019",
      title: "What if Let You Run the Hubble",
      paragraph:
        "How many free autoresponders have you tried? And how many emails did you get through using them?",
    },
    {
      time: "Jan 02, 2019",
      title: "Six Packs Abs The Big Picture",
      paragraph:
        "How many free autoresponders have you tried? And how many emails did you get through using them?",
    },
  ]);
});
//events
app.use("/events", (req, res) => {
  res.status(200).json([
    {
      headline: "Events",
    },
  ]);
});
//for about
app.use("/about", (req, res) => {
  res.status(200).json([
    {
      headline: "About",
    },
  ]);
});

//contact
app.use("/contact", (req, res) => {
  res.status(200).json([
    {
      headline: "Contact",
    },
  ]);
});
// server setUp
app.listen(process.env.PORT);
console.log("Server is running at port" + process.env.PORT);
