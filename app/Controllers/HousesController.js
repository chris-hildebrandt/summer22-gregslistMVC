import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

// private functions

function _drawHouses(){
  let template = ""
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}

// public functions

export class HousesController{
  constructor(){
    ProxyState.on("houses", _drawHouses)
    ProxyState.on("houses", saveState)
    loadState()
  }

  viewHouses(){
    _drawHouses()
    let carFormElm = document.getElementById("form")
    carFormElm.classList.add("d-none")
    let jobFormElm = document.getElementById("job-form")
    jobFormElm.classList.add("d-none")
    let houseFormElm = document.getElementById("house-form")
    houseFormElm.classList.remove("d-none")
  }

  createHouse(){
    window.event.preventDefault()
    console.log("home created");
    let form = window.event.target

    let newHouse = {
state: form.state.value,
city: form.city.value,
year: form.year.value,
price: form.price.value,
img: form.img.value,
description: form.description.value,
    }
    housesService.createHouse(newHouse)
    form.reset()
  }

  deleteHouse(id){
    housesService.deleteHouse(id)
  }
}