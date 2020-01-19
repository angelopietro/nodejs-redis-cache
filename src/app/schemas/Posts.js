import mongoose from 'mongoose';

const PostsSchema = new mongoose.Schema({
  _id: { type: String },
  body: {
    type: String,
  },
  permalink: { type: String },
  author: { type: String },
  title: { type: String },
  tags: {
    type: Array,
  },
  comments: {
    type: Array,
  },
  date: {
    type: Date,
  },
});

export default mongoose.model('posts', PostsSchema);
