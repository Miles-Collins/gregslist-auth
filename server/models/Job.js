import mongoose from "mongoose"
const Schema = mongoose.Schema
export const JobSchema = new Schema (
  {
  title: {type: String, required: true, minlength: 2, maxlength: 50},
  pay: {type: Number, required: true, min: 0, max: 10000000}
}
)