import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CarSchema = new Schema (
{
  make: {type: String, required: true, minlength: 1, maxlength: 25 },
  model: {type: String, required: true, minlength: 2, maxlength: 25},
  year: {type: Number, required: true, min: 1969, max: 9999 },
  price: {type: Number, required:true, min: 0, max: 99999999},
  img: {type: String, maxlength: 500, default: 'https://i.pinimg.com/564x/88/38/c5/8838c5b49637eda5fd8986f3a9b2f196--car-outline-car-applique-pattern.jpg'},
  description: {type: String, maxlength: 250}
}
)
