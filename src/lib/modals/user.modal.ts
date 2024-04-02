import { Schema, model, models } from "mongoose";

const DataSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  ProfileImage: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  chats:{
    type:[{type:Schema.Types.ObjectId,ref:"chat"}],
    default:[]
},
});

const Data = models?.Data || model("Data", DataSchema);

export default Data;
