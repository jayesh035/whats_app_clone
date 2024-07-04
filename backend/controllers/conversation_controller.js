import Conversation from "../model/Conversation.js";

export const setConversation=async(req,res)=>{
    try {
        const senderId=req.body.senderId;
        const reciverId=req.body.reciverId;

      const exist=  await Conversation.findOne({members:{$all:[reciverId,senderId]}});
        if(exist)
            {
             return   res.status(200).json('conversation already exist');
            }
    const newConversation=new Conversation({
        members:[reciverId,senderId]
    })
    await newConversation.save();

    return res.status(200).json('conversation saved successfully')
    
    
    } catch (error) {
        return res.status(500).json(error.message);       
    }
}
export const getConversation=async(req,res)=>{
    try {
        const senderId=req.body.senderId;
        const reciverId=req.body.reciverId;

      const exist=  await Conversation.findOne({members:{$all:[reciverId,senderId]}});
        if(exist)
            {
             return   res.status(200).json(exist);
            }
    
    return res.status(200).json('conversation is not exist')
    
    
    } catch (error) {
        return res.status(500).json(error.message);       
    }
}