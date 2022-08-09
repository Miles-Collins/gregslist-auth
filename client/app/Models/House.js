

export class House{
  constructor({_id, bedrooms, bathrooms, year, levels, price, imgUrl, description}) {
    this.id = _id
    this.bedrooms = bedrooms || ''
    this.bathrooms = bathrooms || ''
    this.year = year || 1969
    this.levels = levels || ''
    this.price = price || ''
    this.img = imgUrl || ''
    this.description = description || ''
  }

  get Template(){
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.bedrooms} | ${this.bathrooms} | ${this.year}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-info" onclick="app.housesController.reviseHouse('${this.id}')">Adjust House Settings</button> 
          <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>
    `
  }
}