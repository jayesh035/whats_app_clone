import Conversation from "../model/Conversation.js";
import message from "../model/Message.js"

export const newMessage=async(req,res)=>{

    try {
        
        const newData=new message(req.body);
        await newData.save();
        
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
        return res.status(200).json("message has been sent successfully");
    } catch (error) {
        return res.status(500).json(error.message)
    }

}

export const getMessage=async(req,res)=>{
    try {
        const messages=await message.find({conversationId:req.params.id});
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}