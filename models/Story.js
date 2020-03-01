const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StorySchema = new Schema({
  title:{
    type: String,
    required: true
  },
  desc:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required:false
  }
});

mongoose.model('story', StorySchema, 'stories');