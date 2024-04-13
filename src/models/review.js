import  mongoose  from "mongoose";

const schema = mongoose.Schema;

const review = new schema ({
    reviewerId : {},
    reviewedUserId : {},
    rating : {},
    comment: {},
    timeStamp: {}
})

export const reviewModel = mongoose.Model('Review', reviewSchema)