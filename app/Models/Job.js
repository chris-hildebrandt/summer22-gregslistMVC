import { generateId } from "../Utils/generateId.js"

export class Job{
  constructor({company, title, start, salary, rate, img, description}){
    this.id = generateId()
    this.company = company
    this.title = title
    this.start = start
    this.salary = salary
    this.rate = rate
    this.img = img
    this.description = description
  }

  get Template(){
    return `
    <div class="col-4 p-3">
    <div class="bg-white elevation-2">
      <img class="img-fluid" src="${this.img}" alt="">
      <div class="p-2">
        <h4 class="text-center">${this.company} | ${this.title} | ${this.start}</h4>
        <p>${this.description}</p>
        <p class="text-end text-success m-0">$<b>${this.salary} ${this.rate}</b></p>
        <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button> 
      </div>
    </div>
  </div>
    `
  }
}