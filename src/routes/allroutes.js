import { Router } from "express";
import { addUser, findUserById, getAllUsers } from "../controllers/user_controllers";
import { postReview } from "../controllers/reviews_controllers";
import { addItem, deleteItem, updateItem } from "../controllers/itemList_controllers";


const router = Router();

//users
router.post('/user', addUser ),
router.get('/user', getAllUsers)
router.get('/user/:id', findUserById)

//reviews
router.post('/review', postReview )


//itemList
router.post('/itemList', addItem)
router.patch('/itemList/:id', updateItem)
router.delete('/itemList/:id', deleteItem)