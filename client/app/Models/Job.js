





export class Job {
  constructor({_id, company, jobTitle, description, hours, rate}) {
    this.id = _id
    this.company = company
    this.jobTitle = jobTitle
    this.description = description
    this.hours = hours
    this.rate = rate
  }
  get Template(){
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.company} | ${this.jobTitle} | ${this.hours}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.rate}</b></p>
          <button class="btn btn-info" onclick="app.housesController.reviseHouse('${this.id}')">Adjust House Settings</button> 
          <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>
    `
  }
}
