const express = require( 'express' );

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
})

app.get("/projects", (req, res) => {
  res.sendFile(__dirname + '/public/projects.html');
})

app.get("/languages", (req, res) => {
  res.sendFile(__dirname + '/public/languages.html')
})
