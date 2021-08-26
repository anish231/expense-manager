const express=require("express")
const BodyParser=require("body-parser")

const app=express();
var lis=["personal expense","electricity bill", "taxes"]
var date=null;

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(BodyParser.urlencoded({extended:true}))
console.log(date);
app.get("/",function(req,res){

  //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //var today  = new Date();
  if(date!=null)
  {
  var date1 = date;
  }

  res.render("list",{kindaDay: date1,optio:lis});
}
)

app.post("/getDate",function(req,res){
  //item=req.body.job;
  //lis.push(item)
  date=req.body.date1;
  res.redirect("/");

})






app.post("/",function(req,res){
  item=req.body.job;
  lis.push(item)

  res.redirect("/")

})



app.listen(3000,function(req,res){
  console.log("server is running on port 3000")
})
