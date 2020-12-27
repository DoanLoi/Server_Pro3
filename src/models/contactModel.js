import mongoose from "mongoose";
let Schema=mongoose.Schema;
let ContactSchema= new Schema({
userId:String,
contactId:String,
lastMessage:{
  content:String,
  isReaded:{
    type:Boolean,
    default:false
  },
  time:{
    type:Number,
    default:Date.now()
  }
}

});

//Cac thao tac ban ghi
ContactSchema.statics={
createNew(item){
  return this.create(item); // tra ve 1 promise
},

getAllConversation(userId)
{
  return this.find({
    $or:[     //tim tat ca ban be
      {"userId":userId},
      {"contactId":userId}
  ]}).sort({"lastMessage.time":-1}).limit(10).exec();
},
//Kiem tra xem co loi moi ket ban chua
getConversationId(userId,contactId){
 return this.findOne({
   $or:[
     {
       $and:[
         {"userId":userId},
         {"contactId":contactId}
       ]
     },
     {
      $and:[
        {"userId":contactId},
        {"contactId":userId}
      ]
    }
   ]
 })
},
//Update Lastmessage
updateLastMessage(content,converid){
  return this.update({"_id":converid},{"lastMessage.time":Date.now(),"lastMessage.content":content}).exec();}
  
//XOa ban be khoi danh sach ban be
// removeContact(userId,contactId){
//   return this.remove({
//     $or:[
//       {
//         $and:[
//           {"userId":userId},
//           {"contactId":contactId},
//           {"status":true}
//         ]
//       },
//       {
//        $and:[
//          {"userId":contactId},
//          {"contactId":userId},
//          {"status":true}
//        ]
//      }
//     ]
//   })
// },


// //Xoa loi moi ket ban da gui
// removeRequestContactSent(userId,contactId){
//   return this.remove({
//     $and:[
//       {"userId":userId},
//       {"contactId":contactId},
//       {"status":false}
//     ]
//   }).exec();
// },
// //xoa loi moi  ket ban da nhan
// removeRequestContactReceived(userId,contactId){
//   return this.remove({
//     $and:[
//       {"userId":contactId},
//       {"contactId":userId},
//       {"status":false}
//     ]
//   }).exec();
// },
// //dong y loi moi ket ban
// approveRequestContactReceived(userId,contactId){
//   return this.update({
//     $and:[
//       {"userId":contactId},
//       {"contactId":userId},
//       {"status":false}
//     ]
//   },{
//     "status":true,
//     "updatedAt":Date.now()
//   }).exec();
// },
// // lay danh sach ban be
// getContacts(userId,limit){
//   return this.find({
//     $and:[
//       {$or:[
//         {"userId":userId},
//         {"contactId":userId}
//       ]},
//       {"status":true}
//     ]
//   }).sort({"updatedAt":-1}).limit(limit).exec();
// },

// getContactsSent(userId,limit){
//   return this.find({
//     $and:[
//       {"userId":userId},
//       {"status":false}
//     ]
//   }).sort({"createdAt":-1}).limit(limit).exec();
// },
// getContactsReceived(userId,limit){
//   return this.find({
//     $and:[
//       {"contactId":userId}, // th nao nhan laf contactId, th gui la userId
//       {"status":false}
//     ]
//   }).sort({"createdAt":-1}).limit(limit).exec();
// },

// countAllContacts(userId){
//   return this.count({
//     $and:[
//       {$or:[
//         {"userId":userId},
//         {"contactId":userId}
//       ]}, // th nao nhan laf contactId, th gui la userId
//       {"status":true}
//     ]
//   }).exec();
// },
// countAllContactsReceived(userId){
//   return this.count({
//     $and:[
      
//       {"contactId":userId}, // th nao nhan laf contactId, th gui la userId
//       {"status":false}
//     ]
//   }).exec();
// },
// countAllContactsSent(userId){
//   return this.count({
//     $and:[
     
//       {"userId":userId},// th nao nhan laf contactId, th gui la userId
//       {"status":false}
//     ]
//   }).exec();
// },

// //Lay them ban be
// readMoreContacts(userId,skip, limit){
//   return this.find({
//     $and:[
//       {$or:[
//         {"userId":userId},
//         {"contactId":userId}
//       ]},
//       {"status":true}
//     ]
//   }).sort({"updateAt":-1}).skip(skip).limit(limit).exec();
// },
// readMoreContactsSent(userId,skip, limit){
//   return this.find({
//     $and:[
//       {"userId":userId},
//       {"status":false}
//     ]
//   }).sort({"createdAt":-1}).skip(skip).limit(limit).exec();
// },
// readMoreContactsReceived(userId,skip, limit){
//   return this.find({
//     $and:[
//       {"contactId":userId}, // th nao nhan laf contactId, th gui la userId
//       {"status":false}
//     ]
//   }).sort({"createdAt":-1}).skip(skip).limit(limit).exec();
// },
// // cap nhat thoi gian nhan tin moi
// updateWhenHasNewMessage(userId,contactId){
// return this.update({
//   $or:[
//     {
//       $and:[
//         {"userId":userId},
//         {"contactId":contactId}
//       ]
//     },
//     {
//      $and:[
//        {"userId":contactId},
//        {"contactId":userId}
//      ]
//    }
//   ]
// },{"updatedAt":Date.now()}).exec();
// }


}
 module.exports=mongoose.model("contact",ContactSchema);
 

