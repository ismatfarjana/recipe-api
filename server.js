const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const MongoStore = require("connect-mongo")(expressSession);
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();

//pulling in routes
const postRouter = require("./routes/postRoutes");
const pagesRouter = require("./routes/pagesRoutes");
const authRouter = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  expressSession({
    secret: "World is not a fair place",
    resave: false,
    saveUninitialized: true,
    cookie: { expires: 2000000 },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

//config local stratagy for passport
require("./middleware/passport");
app.use(passport.initialize());
app.use(passport.session());

//express-handlebars
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultlayout: "index",
    layoutsDir: __dirname + "views/layouts",
    partialsDir: __dirname + "views/partials",
    authDir: __dirname + "view/auth"
  })
);

//database
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(err => {
    console.error("Error connecting to mongoDB", err);
  });

//landing routes
app.get("/", (req, res) => {
  res.send("welcome to homepage of recipe blog!");
});

//posts routes
//users routes
//authentication routes
// app.use("/", pagesRouter);
app.use("/users", authRouter);
// app.use("/post", postRouter);

//port
const port = process.env.PORT || 8000;
//listening to port
app.listen(port, () => {
  console.log(`Express API listening on port ${port}!`);
});
