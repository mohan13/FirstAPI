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
      headline: "Hi ! I'm Mohan",
      title:
        "A Frontend and Backend focused Web Developer building the Frontend of Websites that leads to the success of the overall product",
      Image: "For image",
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
app.listen(5000);
console.log("Server is running at port 5000");
