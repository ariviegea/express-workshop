var express = require('express');
var formidable = require('express-formidable');
var app = express();


app.use(express.static("public"));

app.use(formidable());
app.post("/create-post", (req,res) => {
    console.log(req.fields)
})

app.listen(3000,function(){
    console.log("Server is listening to port 3000");
});

