import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({

userName : {type: String, required: true},

email : {type: String, required: true},

password : {type: String, min: 8, required: true},

location: {type:String, required: true}

});

export const userModel = mongoose.model('User', userSchema)