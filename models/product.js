import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const productSchema = new Schema({
    price: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    expense: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "transaction",
        }
    ],
},
{
    timestamps: true,
    toJSON: {
        getters: true
    }
});

const product = mongoose.model("product", productSchema);

export default product;