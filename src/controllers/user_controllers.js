import { userModel } from "../models/user";


// add user
export const addUser = async (req, res)=>{

    try {
        const data=req.body;
        const addUser=await userModel.create(data);
        res.json(addUser)
    } catch (error) {
        console.log(error)
    }
}


// get all users   :: if you want get all accounts registered
export const getAllUsers = async (req, res)=>{

    try {
        const data=req.body;
        const getAllUsers=await userModel.find({});
        res.json(getAllUsers)
    } catch (error) {
        console.log(error)
    }
}

 // get user by ID
 export const findUserById = async (req, res)=>{

    try {
        const data=req.body;
        const getAllUsers=await userModel.findById(req.params.id);
        res.json(findUserById)
    } catch (error) {
        console.log(error)
    }
}
