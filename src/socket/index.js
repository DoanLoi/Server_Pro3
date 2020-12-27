import chatText from "./chat/chatText"
import typingOn from "./chat/typingOn"
import typingOff from "./chat/typingOff"
import chatImage from "./chat/chatImage"



let initSockets=(io)=>{
  chatText(io);
  typingOff(io);
  typingOn(io);
  chatImage(io);

}
module.exports=initSockets;