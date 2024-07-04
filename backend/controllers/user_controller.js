import users from "../model/User.js"


export const addUser=async(req,res)=>{
    try {
        let exist=await users.findOne({sub:req.body.sub})
        if(exist){
            res.status(200).json({msg:"user already exist"});
            return;
        }
        const newUser=new users(req.body);
        await newUser.save();
        res.status(200).json(newUser);

    } catch (error) {
        return res.status(500).json(error.message);

    }
}
export const getUsers=async(req,res)=>{

    try {
        const users_info=await users.find({});
        return res.status(200).json(users_info)
    } catch (error) {

        return res.status(500).json(error.message);
    }

}
