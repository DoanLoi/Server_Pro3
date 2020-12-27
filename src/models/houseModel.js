import mongoose from "mongoose";
  let Schema=mongoose.Schema;
  let houseSchema= new Schema({
  ownerId:String,
  city:String,
  district:String,
  street:String,
  area:Number,
  numberFloor:Number,
  numberBed:Number,
  type:String,
  roadArea:Number,
  lat:Number,
  long:Number,
  price:Number,
  linkImages:[String],
  createdAt:{
    type:Number,
    default:Date.now
  },
  numberView:Number

  



  });





  houseSchema.statics={
    addHouse(house){
      return this.create(house)
    },
    getAllHouse(page,limit){
      console.log(page)
      return this.find().sort({"createdAt":-1}).skip(page*limit).limit(limit);
    },
    getBestView(limit){
      return this.find().sort({"numberView":-1}).limit(limit);
    },
    getHouseOfMe(id){
      return this.find({'ownerId':id}).sort({"createdAt":-1}).exec()

    },
    getAllHouseNoLimit(){
      return this.find().exec()
    },
    deleteHouseById(id){
      return this.findByIdAndRemove(id).exec();
    },
    findHouseById(id){
      return this.findById(id).exec();
    },
    updateCountView(id,number){
      return this.findOneAndUpdate({"_id":id},
      {"numberView":number},
    
    ).exec();
    },
    getNewCar(){
      return this.find().sort({"createdAt":-1}).limit(5).exec();
    },
    getCar(price, car){
      console.log(typeof price);
    
      return this.find(
        {
          $and:[
            {"priceADay":{$lte:price}},
            car
          ]
        }
          ).exec();
    },
    getHotCar(){
      return this.find().sort({"numberRent":-1}).limit(5).exec();
    },
    getDetailCar(carId){
      return this.findById(carId).exec();
    },
    getRelatedCar(cateId,carId){
      return this.find({
        $and:[
          {"cateId":cateId},
          {"_id":{$ne:carId}}
        ]
        }).limit(5).exec();
    },
    addNumberRent(carId,number){
      return this.findOneAndUpdate({"_id":carId},
        {"numberRent":number},
      
      ).exec();
    },

    deleteCar(carId){
      return this.findByIdAndRemove(carId).exec();
    },

    updateCar(car){
      return this.replaceOne({_id: car.id}, car);
    },
    updateNumberRate(id,num,avg){
      return this.findOneAndUpdate({"_id":id},{
        "numberRate":num,
        "avgRate":avg
      })
  },
  countCar(){
    return this.count();
  },
  liveSearch(keyword){
    return this.find({
      "name":{$regex:new RegExp(keyword,"i")}
    })
  }



  }
  module.exports=mongoose.model("house",houseSchema);