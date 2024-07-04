import mongoose from "mongoose";

const MessageSchema=new mongoose.Schema({
    senderId:{
        type:String
    },
    reciverId:{
        type:String
    },
    conversationId:{
        type:String
    },
    type:{
        type:String
    },
    text:{
        type:String
    }
    
},{
    timestamps:true
})

const message=mongoose.model('Message',MessageSchema);
export default message;