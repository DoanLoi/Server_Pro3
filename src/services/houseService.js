import distance from "../config/caculate"
import house from "../models/houseModel"
import countModel from "../models/countModel"
let addHouse=(id,infor)=>{
  return new Promise(async(resolve,reject)=>{
    try {
      let newHouse={
        ownerId:id,
        city:infor.city,
        district:infor.district,
        street:infor.street,
        area:+infor.area,
        numberFloor:+infor.numberFloor,
        numberBed:+infor.numberBed,
        roadArea:+infor.roadArea,
        type:infor.type,
        price:+infor.price,
        linkImages:infor.images,
        numberView:0,
        lat:infor.lat,
        long:infor.long
      }
     let houseNew=await house.addHouse(newHouse)
     let count=await countModel.countHouse()
     await countModel.updateNewHouse(count[0]._id,count[0].count)
     resolve(houseNew)
    } catch (error) {
      reject(error)
    }
  })
}
let getAllHouse=async(page,data)=>{
  return new Promise(async(resolve,reject)=>{
      const limit=5
     if(data){
       console.log(data)
      let area=data.area.split('-')
      console.log(area)
      let houseFilter={};
      if(data.city){
        houseFilter.city=data.city.name
      }
      if(data.district){
        houseFilter.district=data.district.name
      }
      if(data.type){
        houseFilter.type=data.type
      }
      let allHouse=await house.getAllHouseFilter(page-1,limit,+data.topPrice,+data.bottomPrice,+data.numberBed,+data.numberBath,+area[1],+area[0],houseFilter)
      resolve(allHouse)
     }else{
      let allHouse=await house.getAllHouse(page-1,limit)
      resolve(allHouse)
     }


})
}
let getBestView=async()=>{
  return new Promise(async(resolve,reject)=>{
    try {
      const limit=5
      let listBestHouse=await house.getBestView(limit)
      console.log(listBestHouse)
      resolve(listBestHouse)
    } catch (error) {
      console.log(error)
    }

})
 
}
let getHouseOfMe=async(id)=>{
  return new Promise(async(resolve,reject)=>{
      let allHouse=await house.getHouseOfMe(id)
      resolve(allHouse)

})
}
let getCloseHouse=async(location)=>{
  return new Promise(async(resolve,reject)=>{
      let allHouse=await house.getAllHouseNoLimit()
      let allHouseWithDistance=[]
      allHouse.forEach(house=>{
        house=house.toObject()
        let Cdistance=distance.calcCrow(location.latitude,location.longitude,house.lat,house.long)
        if(Cdistance < 3){
          house.distance=Cdistance
          allHouseWithDistance.push(house)
        }
       
      })
      allHouseWithDistance.sort(distance.compare)
      console.log(allHouseWithDistance)
      

      resolve(allHouseWithDistance)

})
}
let updateCountView=async(id)=>{
  return new Promise(async(resolve,reject)=>{
      let houseById=await house.findHouseById(id)
      houseById=houseById.toObject()
      let houseRes=await house.updateCountView(id,houseById.numberView+1)

      resolve(houseRes)

})
}
let deleteHouseOfMe=async(id)=>{
  return new Promise(async(resolve,reject)=>{
      await house.deleteHouseById(id)
      resolve(true)

})
}





export default{
  addHouse:addHouse,
  getAllHouse:getAllHouse,
  getBestView:getBestView,
  getHouseOfMe:getHouseOfMe,
  getCloseHouse:getCloseHouse,
  updateCountView:updateCountView,
  deleteHouseOfMe:deleteHouseOfMe
}


