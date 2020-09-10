const { response } = require("express");

var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express();

// app config
mongoose
  .connect("mongodb://localhost:27017/restful_blog_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to RESTful Blog App DB"))
  .catch((error) => console.log(error.message));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now },
});

var Blog = mongoose.model("Blog", blogSchema);

// RESTful routes

app.get("/", function (req, res) {
  res.redirect("/blogs");
});

// INDEX route
app.get("/blogs", function (req, res) {
  Blog.find({}, function (err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { blogs: blogs });
    }
  });
});

// NEW route
app.get("/blogs/new", function (req, res) {
  res.render("new");
});

// CREATE route
app.post("/blogs", function (req, res) {
  Blog.create(req.body.blog, function (err, newBlog) {
    if (err) {
      res.render("new");
    } else {
      res.redirect("/blogs");
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`The RESTful Blog App Server is running on port ${PORT}`);
});
