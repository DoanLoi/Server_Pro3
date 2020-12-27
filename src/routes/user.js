import express from "express";
import user from "../controllers/userController"
import house from "../controllers/houseController"
import chat from "../controllers/chatController"
import multer from "multer"
import passport from 'passport'
const upload = multer({
    dest: "./public/images"
})
require("../config/passport");
let router = express.Router();
router.get("/", (req, res) => res.send("WELCOME TO DVL"))
router.post('/register', user.register);
router.post('/login', user.login);
router.post('/add_house', passport.authenticate('jwt', { session: false }), house.addHouse)
router.post('/get_all_house', passport.authenticate('jwt', { session: false }), house.getAllHouse)
router.get('/get_best_house', passport.authenticate('jwt', { session: false }), house.getBestView)
router.get('/get_house_of_me', passport.authenticate('jwt', { session: false }), house.getHouseOfMe)
router.post('/get_close_house', passport.authenticate('jwt', { session: false }), house.getCloseHouse)
//Chat
router.get('/get_conversation', passport.authenticate('jwt', { session: false }), chat.getConversation)
router.post('/get_message', passport.authenticate('jwt', { session: false }), chat.getMessage)
router.post('/get_conversation_id', passport.authenticate('jwt', { session: false }), chat.getConversationId)
router.post('/chat_text', passport.authenticate('jwt', { session: false }), chat.chatText)
router.post('/chat_image', passport.authenticate('jwt', { session: false }), chat.chatImage)
router.post('/update_count_view', passport.authenticate('jwt', { session: false }), house.updateCountView)
router.post('/delete_house_of_me', passport.authenticate('jwt', { session: false }), house.deleteHouseOfMe)

module.exports = router;