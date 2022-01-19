const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId

const connectionURL  = "mongodb://127.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)=>{
    if (error) {
       return console.log("unable to connect to database");
    }
    const db = client.db(databaseName)

    // db.collection("users").insertOne({
    //     name:"Gil",
    //     age: 7
    // }, (error, result)=> {
    //     if (error) {
    //        return  console.log("unable to insert user");
    //     }
    //     console.log(result.op);
    // })
    // db.collection("posts").insertMany([
    //     {
    //         user: "Tamar",
    //         content: "This is not cool",
    //         comment: [{user:"Gil", content:"You are right"}, {user:"Noam", content:"I think the same"}]
            
    //     },
    //     {
    //         user: "Noam",
    //         content: "Tody is a good day",
    //         comment: [{user:"Tamar", content: "I agree"}]
    //     }
    // ],(error, result)=> {
    //         if (error) {
    //            return  console.log("unable to insert user");
    //         }
    //         console.log(result);
    //     })

    db.collection('users').findOne({ _id: new ObjectId("61e67f746e905e3b436ad938") }, (error, user) => {
        console.log(user)
    })

    db.collection('users').find({ name: "Tamar" }).toArray((error, users) => {
        console.log(users)
    })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5c0fe6634362c1fb75b9d6b5")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
})

