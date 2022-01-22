const express = require("express")
const path = require("path")
const app = express();
const hbs = require("hbs")
const port = process.env.PORT || 3000;

const templetes_path = path.join(__dirname,"./templetes/views")
app.set("view engine","hbs")
app.set("views",templetes_path)
app.use(express.json())


app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})

app.listen(port,()=>{
    console.log("Connection Successful at",port)
})