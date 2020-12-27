import {pushSocketIdToArray, emitNotifyToArray, removeSocketIdFromArray} from "./../../config/socketHelper"
let typingOn = (io) => { //io tu thu vien cua socket.io
  let clients = {};// bien cuc bo luu tru tat ca socketid cua nguoi dung
  
  io.on("connection", (socket) => { // moi khi co 1 nguoi dung ket nois thi ham nay chay 1 lan


    //luu socketId vao mang client
    clients = pushSocketIdToArray(clients, socket.request.user._id, socket.id);
   
  
    socket.on("user-is-typing", (data) => {
      console.log("xxxx");
      console.log(data);

    
        // thong tin nguoi gui va tin nhan
        let response = {
          targetId: socket.request.user._id
        };

        if (clients[data.targetId])//Neu nguoi muon ket ban dang onl
        {
          console.log("vvvv");
          //gui du lieu den cac socket cua nguoi ban muon ket ban
          emitNotifyToArray(clients,data.targetId, io, "response-user-is-typing",response);
        }
      



    });
    socket.on("disconnect", () => {
      clients = removeSocketIdFromArray(clients, socket.request.user._id, socket)
    });
  })

}
module.exports = typingOn;