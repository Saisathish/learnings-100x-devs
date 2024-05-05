const express = require("express"); 
const app = express();
const port = 3000;
let numberOfRequests = 0;

function calculateNumberofRequests(req,res,next){
  numberOfRequests++;
  console.log(numberOfRequests);
  next();
}

function userMiddleware(req,res,next){
  const userName = req.headers.username;
  const password = req.headers.password;

  if(userName !== "admin" || password !== "pass" ){
    res.status(403).json({
      msg:"User not authorized!!"
    });
  } else {
    next();
  }
}

function kidneyIdMiddleware(req,res,next){
  const kidneyId = req.query.id;

  if(kidneyId != 1 && kidneyId != 2 ){
    res.status(411).json({
      msg:"Wrong kidney ids!!"
    });
  } else {
    next();
  }
}

app.use(calculateNumberofRequests);
app.use(userMiddleware);

app.get("/kidney", kidneyIdMiddleware, (req,res) => {
  res.status(200).send("your kidney is healthy!!")
})

app.get("/heart", (req,res) => {
  res.status(200).send("your heart is healthy!!")
})

// global catches
app.use(function(err, req, res, next){
  res.send({
    msg:"Sorry something is up with our servers!!"
  })
})

app.listen(port, ()=>{
  console.log(`Server started listening on port ${port}`);
})