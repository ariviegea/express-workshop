var express = require('express');
var formidable = require('express-formidable');
var fs = require('fs');

var app = express();
var yourData = '{"dataID": "This is my data"}';

var jsonObj = JSON.parse(yourData);

app.use(express.static("public"));

app.use(formidable());
app.post("/create-post", (req,res) => {
    console.log(req.fields)
})

app.listen(3000,function(){
    console.log("Server is listening to port 3000");
});

fs.writeFile("post.json", yourData,'utf8', (error)=> {
    console.log(JSON.stringify(jsonObj));
});