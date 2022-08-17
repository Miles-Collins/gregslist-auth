import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HousesService { 

async getHouses() {
  let houses = await dbContext.Houses.find()
  return houses
}

async createHouse(houseData) {
  let  house = await dbContext.Houses.create(houseData)
  return house
}

async getHouseById(houseId) {
  let house = await dbContext.Houses.findById(houseId)
  if(!house) {
  throw new BadRequest ("Invalid House Id")
  } 
  return house
}

async editHouse(houseId, houseData) {
  let house = await this.getHouseById(houseId)

  house.bedrooms = houseData.bedrooms || house.bedrooms
  house.bathrooms = houseData.bathrooms || house.bathrooms

  await house.save()
  return house
}

async deleteHouse(houseId) {
  let house = await this.getHouseById(houseId)
  await house.remove()
  return house
}
}



export const housesService = new HousesService()
// async deleteHouse(houseId) {
// let house = await getHouseById(houseId)
// await house.remove()
// return house
// }