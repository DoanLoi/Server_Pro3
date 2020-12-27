import chat from "../services/chatService"
import APIError from "../untils/APIError"
const getConversation=async(req,res,next)=>{
  try {
    const {user}=req
    let allConversation=await chat.getAllConversation(user)
    return res.status(200).send(allConversation)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const getMessage=async(req,res,next)=>{
  try {
    const {id,index}=req.body
    let messages=await chat.getMessage(id,index)
    messages.reverse()
    return res.status(200).send(messages)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const getConversationId=async(req,res,next)=>{
  try {

    const {id}=req.body
    const {_id}=req.user
    let conversation=await chat.getConversationId(req.user,id)
    return res.status(200).send(conversation)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const chatText=async(req,res,next)=>{
  try {

    const {content,converId}=req.body
    const {_id}=req.user
    let message=await chat.chatText(_id,content,converId)
    return res.status(200).send(message)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}
const chatImage=async(req,res,next)=>{
  try {
    let data=req.body
    let {_id}=req.user
    let newMessage = await chat.chatImage(_id,data.image,data.converId);
    // //Xoa anh, vi thuc chat luu anh tren co so du lieu
     return res.status(200).send(newMessage)
    // console.log(newMessage)
    // await fsExtra.remove(`${app.image_message_directory}/${newMessage.file.fileName}`)
  } catch (error) {
    next(new APIError({
      message:error.message,
      status:500
    }))
  }
}





export default {
  getConversation:getConversation,
  getMessage:getMessage,
  getConversationId:getConversationId,
  chatText:chatText,
  chatImage:chatImage
}