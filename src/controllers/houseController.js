import APIError from "../untils/APIError"
import house from "../services/houseService"
import { all } from "bluebird"
let addHouse=async(req,res,next)=>{
  try {
    const {infor}=req.body
    const {id}=req.user
    let newHouse=await house.addHouse(id,infor)
    return res.status(200).send(newHouse)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const getAllHouse=async(req,res,next)=>{
  try {
    const {page}=req.body
    const {data}=req.body
    let allHouse=await house.getAllHouse(page,data)
    return res.status(200).send(allHouse)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const getBestView=async(req,res,next)=>{
  try {
    let bestHouse=await house.getBestView()
    return res.status(200).send(bestHouse)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const getHouseOfMe=async(req,res,next)=>{
  try {
    const {_id}=req.user
    let allHouse=await house.getHouseOfMe(_id)
    return res.status(200).send(allHouse)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const getCloseHouse=async(req,res,next)=>{
  try {
    const {location}=req.body
    let allHouse=await house.getCloseHouse(location)
    return res.status(200).send(allHouse)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const updateCountView=async(req,res,next)=>{
  try {

    const {id}=req.body
    let houseRes=await house.updateCountView(id)
    return res.status(200).send(houseRes)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const deleteHouseOfMe=async(req,res,next)=>{
  try {

    const {id}=req.body
    await house.deleteHouseOfMe(id)
    return res.status(200).send(true)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
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