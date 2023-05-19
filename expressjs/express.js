const express = require("express");
const app = express();
const port = 8000;


app.get("/", (req,res)=>{
    res.send("this is my home page");
});
app.get("/about", (req,res)=>{
res.send([{
    id: 1,
    name: "amrat",
    age: "",
},
{
    id: 1,
    name: "amrat",
},
{
    id: 1,
    name: "amrat",
},
]);

});
app.listen(8000, "127.0.0.1", (req, res)=>{
    console.log(`listening to the port ${port} and its working`)
})
console.log("hi");