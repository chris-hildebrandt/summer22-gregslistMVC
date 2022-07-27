import { generateId } from "../Utils/generateId.js"

// wrap the constructor parameters in {} when accepting user input that needs to be interpreted as the same kind of object
export class House {
  constructor({ name, state, city, year, img, price, description }) {
    this.id = generateId()
    this.name = name
    this.state = state
    this.city = city
    this.year = year
    this.img = img
    this.price = price
    this.description = description
  }

  get Template() {
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.state} | ${this.city} | ${this.year}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button> 
        </div>
      </div>
    </div>
    `
  }
}