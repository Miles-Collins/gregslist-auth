import mongoose from "mongoose"
const Schema = mongoose.Schema

export const HouseSchema = new Schema ({
  bedrooms: {type: String, required: true, minlength: 1, maxlength:30},
  bathrooms: {type: String, required: true, minlength: 1, maxlength: 30}
})