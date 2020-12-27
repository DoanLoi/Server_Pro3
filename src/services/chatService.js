import chat from "../models/contactModel"
import message from "../models/messageModel"
import userModel from "../models/userModel"
import fsExtra from 'fs-extra'
let getAllConversation=async(user)=>{
  return new Promise(async(resolve,reject)=>{
    try {
      let allConversation=await chat.getAllConversation(user._id)
      let allConversationPromise=allConversation.map(async conversation=>{
        let contactId= user._id==conversation.userId ?conversation.contactId:conversation.userId
        let contact=await userModel.findUserByIdForSessionToUse(contactId)
        conversation=conversation.toObject()
        conversation.contact=contact
        conversation.user=user
        return conversation
      })
      allConversation=await Promise.all(allConversationPromise)
      resolve(allConversation)
    } catch (error) {
      console.log(error)
    }
      

})
}
let getMessage=async(id,index)=>{
  return new Promise(async(resolve,reject)=>{
      const limit=20
      let allMessage=await message.getMessages(id,index,limit)
      resolve(allMessage)

})
}
let getConversationId=async(user,contactId)=>{
  return new Promise(async(resolve,reject)=>{
    try {
      const limit=20
      let conversation=await chat.getConversationId(user._id,contactId)
      if(!conversation){
        let item={
          contactId:contactId,
          userId:user._id
        }
      conversation=await chat.createNew(item)
      }
      conversation=conversation.toObject()
      let contact=await userModel.findUserByIdForSessionToUse(contactId)
      conversation.contact=contact.toObject()
      conversation.user=user.toObject()

      resolve(conversation)
    } catch (error) {
      console.log(error)
    }
      

})
}
let chatText=async(id,content,converId)=>{
  return new Promise(async(resolve,reject)=>{
      let data={
        conversationId:converId,
        sendId:id,
        messageType:"text",
        content:content

      }
      let time=Date.now()
      await chat.updateLastMessage(content,converId)
      let newMessage=await message.createNew(data)
      resolve(newMessage)

})
}
let chatImage=async(id,messageVal,converId)=>{
  return new Promise(async(resolve,reject)=>{
      let data={
        conversationId:converId,
        sendId:id,
        image:messageVal,
        messageType:"image",
      }
      await chat.updateLastMessage("Ảnh",converId)
      let newMessage=await message.createNew(data)
      resolve(newMessage)

})
}
export default{
  getAllConversation:getAllConversation,
  getMessage:getMessage,
  getConversationId:getConversationId,
  chatText:chatText,
  chatImage:chatImage

}