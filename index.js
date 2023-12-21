const cl = console.log;
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const postArray = [
  {
    id: 123,
    title: "Node JS",
    content: "Node Js is free open-source javascript runtime environment",
  },
  {
    id: 154,
    title: "Express JS",
    content: "Express Js is free open-source javascript Framwork",
  },
];

app.use(bodyParser.json());

app.get("/api/posts", (req, res) => {
  return res.json(postArray);
});

app.get("/api/posts/:id", (req, res) => {
  const post = postArray.find((p) => p.id === +req.params.id);
  return res.json(post);
});

app.post("/api/posts", (req, res) => {
  const postObj = req.body;
  postArray.push(postObj);
  return res.json({ msg: "post is created successfully !!!" });
});

app.listen(PORT, () => {
  cl(`server is running successfully on port ${PORT}`);
});
