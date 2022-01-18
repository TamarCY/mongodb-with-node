const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

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
    db.collection("posts").insertMany([
        {
            user: "Tamar",
            content: "This is not cool",
            comment: [{user:"Gil", content:"You are right"}, {user:"Noam", content:"I think the same"}]
            
        },
        {
            user: "Noam",
            content: "Tody is a good day",
            comment: [{user:"Tamar", content: "I agree"}]
        }
    ],(error, result)=> {
            if (error) {
               return  console.log("unable to insert user");
            }
            console.log(result);
        })
})

