import express from 'express'
import { addUser,getUsers} from '../controllers/user_controller.js';
import { getConversation, setConversation } from '../controllers/conversation_controller.js';
import { getMessage, newMessage } from '../controllers/message_controller.js';
import { getImage, uploadFile } from '../controllers/file_controller.js';
import upload from '../utils/upload.js';
// import { storage } from '../utils/upload.js';



const route=express.Router();

route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',setConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage);
route.post('/file/upload',upload.single("file"),uploadFile);
route.get('/file/:filename',getImage);

export default route;