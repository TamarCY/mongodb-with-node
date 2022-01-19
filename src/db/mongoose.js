const mongoose = require("mongoose")



mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
    
})

// Define model - moved to model folder


// Creat instance of it 
// const me = new User({
//     name: "Inbar  ",
//     email: "mieKe@walla.com",
//     password: "     4343      "
// })

// Save it to db
// me.save().then((result) => {
//     console.log(result);
// }).catch((error)=>{
//     console.log(error.message);
// })


// const Task = mongoose.model("Task",
// {
//     description: {
//         type: String,
//         required: true
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const sleep = new Task(
//     {
//         description: "sleep 8 hours",
//         completed:true
//     }
// )

// sleep.save().then((result) => {
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })