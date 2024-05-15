const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://admin:admin1234@cluster0.xsswcuc.mongodb.net/userappnew",
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(email, password) {
  const userfound = await User.findOne({
    email,
    password
  })

  return userfound;
}

app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (!await userExists(email, password)) {
    const user = new User({
      name,
      email,
      password
    })
  
    await user.save();
  
    res.status(200).json({
      msg:"User created successfully!!"
    })
  } else {
    res.status(200).json({
      msg:"User already exists!!"
    })
  }

});

// app.post("/signin", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username from the database
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

app.listen(3000, () => {
  console.log("server started and listenig at port 3000!!")
});