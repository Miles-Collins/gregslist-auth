import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from '../models/Car'
import { HouseSchema } from "../models/House";
import { JobSchema } from "../models/Job";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('Car', CarSchema)
  Houses = mongoose.model('House', HouseSchema)
  Jobs = mongoose.model('Jobs', JobSchema)
}

export const dbContext = new DbContext()
