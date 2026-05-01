// name. price, flavor, quantity
import {Schema, model} from "mongoose"

const smallSweetSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    flavor: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const SmallSweet = model("SmallSweet", smallSweetSchema)
export default SmallSweet