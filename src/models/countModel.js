import mongoose from "mongoose";
let Schema=mongoose.Schema;
let countSchema= new Schema({
    count:Number
})
countSchema.statics={
    countHouse(){
        return this.find().exec()
    },
    updateNewHouse(id,number){
        return this.findOneAndUpdate({"_id":id},
        {"numberView":number+1},
      
      ).exec();
    },
    addCount(data){
        return this.create(data)
    }
}
module.exports=mongoose.model("count",countSchema);