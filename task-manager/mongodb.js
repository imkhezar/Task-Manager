const mongodb = require ('mongodb')
const ObjectId = require('mongodb').ObjectID;
const MongoCLient=mongodb.MongoClient

const conntectionURL= 'mongodb://127.0.0.1:27017'
const databaseName='task-manager'



MongoCLient.connect(conntectionURL,{useUnifiedTopology: true},(error,client)=>{
//    if(error){
//       return console.log('Unable to connect to database')
//    }
    const db = client.db(databaseName)
//     db.collection('users').insertOne({
//        "name ": "Muhammad Khan",
//        "age":24
       
//     },(error,result)=>{
//        if(error){
//           return console.log('Unable to insert')
//        }
//        console.log(result.ops)
//     })

   // db.collection('users').insertMany([
      
   //    {
   //    name:'Shahzeb Rehmnad',
   //    age: 22,
   //    },
   //    {
   //    name:'Salman Khan',
   //    age:27
   //    },
   //    {
   //       name:'Arif Bangash',
   //       age: 24
   //    }],
   // ),(error,result)=>{
   //    if(error){
   //       return console.log('the is error')
   //    }
   //    console.log(result.ops)

   // }

   // db.collection('tasks').insertMany([
   //    {
   //       description:'call ibrahim'
   //       ,completed:true,

   //    },
   //    {
   //       description:'work on node js',
   //       completed: false
   //    }
   // ])

   //update
//    db.collection('users').updateOne({
//        _id : new ObjectId("5ffb2f65daaf0744b08241b1")
//    }, {
//        $set : {
//            name: 'Umar farooq Updated'
//        }
//    }).then((result)=>{
//        console.log(result)
//    }).catch((error)=>{
//        console.log(error)
//    })
//   })

  //deleteMany

//   db.collection('users').deleteMany({
//       age: 27
//   }).then((result)=>{
//       console.log(result)
//   }).catch((error)=>{
//       console.log(error)
//   })

    db.collection('users').deleteOne({_id: ObjectId("603372527e1ffc33f06abc6f")})
    .then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

})



   // db.collection('users').findOneAndUpdate({"name":'Muhammad Khan'},{$set:{"name":'Mkhezar'}},(error,result)=>{
   //    if(error){
   //       return console.log('not updated')
   //    }
   //    console.log(result)
   // })



 
