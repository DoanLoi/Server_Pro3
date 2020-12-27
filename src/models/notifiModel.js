import mongoose from "mongoose";
let Schema=mongoose.Schema;
let notifiSchema= new Schema({
userId:String,
username:String,
nameCar:String,
isRead:{
  type:Boolean,
  default:false
  },
createdAt:{
type:Number,
default:Date.now
},
status:Number
});

notifiSchema.statics={
  createNew(item){
    return this.create(item);
  },
  getNotifi(){
    return  this.find().sort({"createdAt":-1}).limit(5).exec();
  },
  countNotifUnread(userId){
    return this.count({
      $and:[
        {"userId": userId},
        {"isRead":false}
      ]
    }).exec();
  },
  readNotifi(userId){
    console.log(userId);
    return this.updateMany({"userId":userId},{"isRead":true})
  }
}
module.exports=mongoose.model("notifi",notifiSchema);