import { itemListModel } from "../models/itemList";

//add item
export const addItem = async (req, res) => {
    try {
        const data = req.body
        const addItem = await itemListModel.create(data)
        res.json(addItem)
    } catch (error) {
      console.log(error);  
    }
}

//update item
export const updateItem = async (req, res)=> {
    try {
        const data =await itemListModel.findByIdAndUpdate(req.params._id, req.body)
        res.json(updateItem)
    } catch (error) {
        console.log(error)
    }
}


// delete item
export const deleteItem = async (req, res)=> {
    try {
        const deleteItem =await itemListModel.findByIdAndDelete(req.params._id, req.body)
        res.json(deleteItem)
    } catch (error) {
        console.log(error)
    }
}