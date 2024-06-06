const express = require('express');
const cors = require("cors");
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/todos", async function (req, res){
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "invalid input",
    });
    return;
  }

  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false
    })

    res.status(200).json({
      msg: "Todo created!!",
    });
  } catch (error) {
    res.status(411).json({
      msg: "Proble occured, failed to create todo!!",
    });
  }

})

app.get("/todos", async function (req, res){
  const todos = await todo.find();

  res.status(200).json({
    todos
  })
})

app.put("/completed",async function (req, res){
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "invalid input",
    });
    return;
  } 

  await todo.updateOne({
    _id: req.body.id
  }, {
    completed: true
  });

  res.status(200).json({
    msg: "Todo marked as completed!!",
  });  

})

app.listen(3000,()=>{
  console.log("listening at port 3000");
})