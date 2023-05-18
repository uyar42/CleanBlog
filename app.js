const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
app.get('/', (req, res) => {
  res.send(blog);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
