import mongoose from "mongoose";
let Schema=mongoose.Schema;
let MessageSchema= new Schema({
conversationId:String,
sendId:String,
messageType:String,// kieu ki tu hay hinh anh
content:String,
image:[String],
createdAt:{type:Number, default:Date.now}
});
MessageSchema.statics={
  //luu tin nhan vao csdl
  createNew(item){
    return this.create(item); // tra ve 1 promise
  },
  //lay cac tin nhan da guiu
  getMessages(id,index,limit){

    return this.find({"conversationId":id}).sort({"createdAt":-1}).skip(index*limit).limit(limit).exec();
  }
 
}

 module.exports=mongoose.model("message",MessageSchema);


