const path = require("node:path");
const express = require('express');
const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const messages  = [
    {
     
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
        
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
 
  const message = [{}];
 

  app.get("/", (req, res) => {
    res.render("index", {title: "Mini Messageboard", messages: messages, messageid:messageid});
  });

  app.get("/new", (req, res) => {
    res.render("form", {})
  })

  app.get("/message", (req, res) => {
    res.render("message", {messages:messages, message: messages[id]})
  })

  app.get('/message/:i', (req, res) => {
    const id = req.params;
  res.render('message', { title: 'Message Details', message: messages[id] });
  console.log(messages)
  })

  app.post('/new', (req, res) => {
    messages.push({ text: req.body.text, user: req.body.user, added: new Date()});
    console.log(req.body)
    res.redirect("/")
  })

  
  const PORT = 8000;
  app.listen(PORT, () => console.log(`listening on port ${PORT}!`));