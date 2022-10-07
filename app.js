const express= require('express');

const mongoose = require('mongoose');
const Blog = require('./models/blog')

const app = express();

//connect to mongo db
const db = 'mongodb+srv://Subro:mac151203@firstbackend.fc8csda.mongodb.net/node?retryWrites=true&w=majority';
mongoose.connect(db)
.then((result)=>app.listen(2000))
.catch((err)=>console.log('err'));

app.set('view engine', 'ejs');

app.get('/blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('main',{title:"ALL BLOGS", blogs: result});
    })
    .catch((err)=>{
        console.log(err);
    })
})

//mongoose and mongo sandbox routes
// app.get('/addblog',(req,res)=>{
//     const blog = new Blog({
//         title:"2nd blog",
//         body:"this is my second blog"
//     });
//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/allblog',(req,res)=>{
//     Blog.find()//use findbyid and give id to get specific blog
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// });



// app.use((req,res,next)=>{
//     console.log("host-", req.hostname);
//     console.log("path-",req.path);
//     next();
// });




app.get('/', (req,res)=>{

    const blogs = [
        {title: "subro", body: "hello this is subro in front of you"},
        {title: " mac", body:"buy me a  mac book please>>>>"}
    ]
// res.send('<h1>hello<h1/>')
res.render('main', {title : 'Main', blogs});
});

app.get('/about', (req,res)=>{
    // res.send('<h1>hello in a<h1/>')
    res.render('about', {title: 'About'});
    });



app.get('/something', (req,res)=>{
    // res.send('<h1>hello in b<h1/>')
    res.render('something', {title: 'Something'});
    });

app.get('/create',(req,res)=>{
    res.render('create',{title: 'Create'});
});