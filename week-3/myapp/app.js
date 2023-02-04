// -------------------------
// assignment 1
// -------------------------

// import the "express" module
const express = require("express");
const router = express.Router();

// use express to create a server 
const app = express();

// app listens for HTTP requests on port 3000
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Server!! 😇"); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}! 😇`);
});

// -------------------------
// assignment 2
// -------------------------

app.get("/getData", (req, res) => {
  const number = req.query.number;
  if (number === undefined) {
    res.send("Lack of Parameter"); 
  } else if (!(number > 0)) {
    res.send("Wrong Parameter");
  } else {
    let sum = num => {
      return num === 0 ? 0 : num + sum( num-1 );
    };  
    res.send(`${sum(+number)}`); 
  }
});

// -------------------------
// assignment 3
// -------------------------

app.use(express.static("sum"));

// -------------------------
// assignment 5
// -------------------------
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cookieParser());

app.use(express.static("myName"));

app.get("/myName", (req,res) => {
  if (req.cookies.name === undefined) {
    res.redirect(`/myName.html`);
  } else {
    res.send(req.cookies.name);
  }
});

app.post("/trackName", urlencodedParser, (req,res) => {
  const name = req.body.name;
  res.cookie('name', name);
  res.redirect("/myName");
});

// 
module.exports = router;

















