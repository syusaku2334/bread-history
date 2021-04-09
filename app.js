const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/interview', (req, res) => {
  res.render('interview.ejs');
});



 

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
