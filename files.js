const fs = require('fs');//reading files
fs.readFile('./docs/file.txt', (err , data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
//writing files
fs.writeFile('./docs/file2.txt', 'writing in file 2',()=>{
console.log('done');
});
//creating directory
fs.mkdir('./newfolder',()=>{
console.log('folder created');
});