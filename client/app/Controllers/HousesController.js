import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { housesService } from "../Services/HousesService.js";
import { getHouseForm } from "./Components/HouseForm.js";


function _drawHouses(){
let template = ''
let house = ProxyState.houses
house.forEach(h => template += h.Template)
document.getElementById('listings').innerHTML = template
document.getElementById('form').innerHTML = getHouseForm()
}



export class HousesController{
  constructor(){
    ProxyState.on('houses', _drawHouses)
    this.getHouse()
  }
  
  viewHouses(){
    _drawHouses()
    this.getHouse()
  }

  async getHouse(){
    try {
      await housesService.getHouse()
    } catch (error) {
      console.error('[Get Houses]', error)
      Pop.error(error)
    }
  }

  async createHouse() {
    try {
      window.event.preventDefault()
      let form = window.event.target

      let newHouse = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        year: form.year.value,
        levels: form.levels.value, 
        price: form.price.value,
        imgUrl: form.img.value,
        description: form.description.value 
      }

      await housesService.createHouse(newHouse)

      form.reset()

    } catch (error) {
      console.error('[Creating House]', error)
      Pop.error(error)      
    }
  }

  async deleteHouse(houseId) {
    try {
      await housesService.deleteHouse(houseId)
    } catch (error) {
      console.error('[Deleting House]', error)
      Pop.error(error)
    }
  }

  reviseHouse(houseId) {
    let house = ProxyState.houses.find(h => h.Id == houseId)
    document.getElementById('form').innerHTML = getHouseForm(house)
  }

  async editHouse(houseId) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let houseData = {
        id: houseId,
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        year: form.year.value,
        levels: form.levels.value,
        price: form.price.value,
        imgUrl: form.img.value,
        description: form.description.value
      }
      await housesService.editHouse(houseData)
    } catch (error) {
      console.error('[Editing House]')
      Pop.error(error)      
    }
  }

}