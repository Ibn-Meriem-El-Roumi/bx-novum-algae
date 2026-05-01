import { Schema, model } from "mongoose";

const teaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: "M"
    },
    additions: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
    }
})

const Tea = model("Tea", teaSchema)
export default Tea