const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

var item=[];
app.get("/",(req,res)=>{
    var today=new Date();
    var options = {
     weekday: 'long',
     year: 'numeric', 
     month: 'long', 
     day: 'numeric' 

};

var day=today.toLocaleDateString("en-US",options);

    res.render("list",{kindOfDay:day,newListItem:item});
//    res.send();
})

app.post("/",(req,res)=>{
   var item1=req.body.newItem;
    item.push(item1);
   res.redirect("/");
})

app.listen(3000,(req,res)=>{
    console.log("the server has started on port 3000");
})