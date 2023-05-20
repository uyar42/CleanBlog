const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema

const BlogSchema = new Schema({
  title: String,
  description: String,
});

const Blog = mongoose.model('Blog', BlogSchema);

//create blog
// Blog.create({
//   title: 'Blog Title 2',
//   description: 'lorem ipsum 2',
// });

//read a blog

// Blog.find({}).then((data) => console.log(data));

//update blog

const id = '6468b3a10e57b4e3d5b7bd03';
// Blog.findByIdAndUpdate(id, {
//   title: 'Title 1 updated',
//   description: 'UPDATED lorem ipsum',
// }).then((data) => console.log(data));

//delete a blog

Blog.findByIdAndDelete(id).then(console.log('Success'));
