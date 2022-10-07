const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema-structure for our data
const blogschema = new Schema({
    title:{
        type: String,
        required: true

    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true});

const Blog = mongoose.model('Blog',blogschema);
module.exports=Blog;