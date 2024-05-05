const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

function calculateSum(n){
  let sum = 0;
  for(let i=0;i<=n;i++){
    sum = sum + i;
  }
  return sum;
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.use(bodyParser.json())

app.get('/sum', (req, res) => {
  const n = req.query.n;
  const sum = calculateSum(n);
  res.send("hi your sum is "+ sum);
})

app.get("/files/:fileName",(req,res)=>{
  const fileName = req.params.fileName;
  res.send(fileName.toString());
})

app.post('/conversations',(req,res) => {
  console.log(req.headers["authorization"]);
  console.log(req.body);
  res.send({
    msg: "2 + 2 = 4"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})