import mongoose from "mongoose";

const schema = mongoose.Schema;

const itemListSchema = new schema({

userId : {type: String, required: true},

items : {type: String, required: true},

timestamp : {type: String, min: 8, required: true},

});

export const itemListModel = mongoose.model('ItemList', itemListSchema)