const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.xsswcuc.mongodb.net/userappnew");

const User = mongoose.model("Users",{name:String, email: String, password:String});

const user = new User({
  name: "Sai Sathish",
  email: "sai.sathish@xyz.com",
  password: "1234"
});

user.save().then(()=>{
  console.log("saved successfully!!")
})
