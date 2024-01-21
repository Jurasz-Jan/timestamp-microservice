import mongoose from "mongoose";

const AntiqueSchema=mongoose.Schema(
{
    itemName:
    {
        type:String,
        required: true,
    },
    origin: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    condition: {
        type: String,
        enum: ['Excellent', 'Good', 'Fair', 'Poor'],
        default: 'Good',
    },
    price: {
        type: Number,
        required: true,
    },
    
},
{timestamps:true},

);
export const Antique= mongoose.model('d',AntiqueSchema)