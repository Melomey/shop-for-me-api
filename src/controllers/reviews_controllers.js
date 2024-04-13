import { reviewModel } from "../models/review";



// add review
export const postReview = async (req, res)=> {
    try {
        const data = req.body;
        const postReview = await reviewModel.create(data)
        res.json(postReview)
    } catch (error) {
        console.log(error)
    }
}

//