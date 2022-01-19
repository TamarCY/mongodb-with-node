const mongoose = require("mongoose")

const Task = mongoose.model("Task",
{
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    }
})

// const sleep = new Task(
//     {
//         description: "sleep 8 hours",
//         completed: true
//     }
// )

module.exports = Task