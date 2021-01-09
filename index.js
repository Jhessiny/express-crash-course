const express = require("express");
const path = require("path");
// const exphbs = require("express-handlebars");

const logger = require("./middleware/logger");

const app = express();

//init middleware
// app.use(logger);

//handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view egine", "handlebars");

//bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set a static folder
app.use(express.static(path.join(__dirname, "public")));

//members api routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
