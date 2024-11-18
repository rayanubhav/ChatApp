import mongoose from "mongoose";

const messageSchema=mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    message:{
        type:String,
        required:true,
        maxlength:1000,
        trim:true,
        validate:[
            {
                validator:(value)=>value.length>0,
                message:'message cannot be empty'
            },
            {
                validator:(value)=>/^[a-zA-Z0-9\s]*$/.test(value),
                message:'Message can only contain alphanumeric characters and spaces',
            },
        ],
    } , createdAt:{type:Date,default:Date.now},
},{
    timestamps:true,
});

const Message=mongoose.model("Message",messageSchema);

export default Message;