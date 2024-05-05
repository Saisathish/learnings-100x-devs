const express = require('express')
const app = express()
const port = 3000

const user = [{
  name: "john",
  kidneys: [{
    healthy: false
  },{
    healthy: false
  }]
}];

app.get("/",(req,res)=>{
  const numKidneys = user[0].kidneys.length;
  const numHealthyKidneys = user[0].kidneys.filter((val)=>val.healthy).length;
  const numUnhealthyKidneys = numKidneys - numHealthyKidneys;

  res.send({"numberOfKidneys":numKidneys,numHealthyKidneys,numUnhealthyKidneys});
})

app.use(express.json());

app.post("/",(req,res)=>{
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy : isHealthy
  });
  console.log(user[0].kidneys)
  res.json({"msg":"Done!"});
})

app.put("/",(req,res)=>{
  const numUnHealthyKidneys = findNumUnHealthyKidneys();
  if(numUnHealthyKidneys === 0){
    res.status(411).send({"msg":"All your kidneys are healthy"});
  } else {
    user[0].kidneys.map((val) => val.healthy = true);
    console.log(user[0].kidneys)
    res.json({"msg":"Done!"});
  }
})

app.delete("/",(req,res)=>{
  const numUnHealthyKidneys = findNumUnHealthyKidneys();
  if(numUnHealthyKidneys > 0){
    user[0].kidneys = user[0].kidneys.filter((val)=>val.healthy);
    res.json({"msg":"Done!"});
  } else {
    res.status(411).send({"msg":"You have no bad kidneys"});
  }
})

function findNumUnHealthyKidneys(){
  return user[0].kidneys.filter((val)=>val.healthy===false).length
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})