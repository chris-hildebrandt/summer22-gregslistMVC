import { ProxyState } from "../AppState.js";


// Private Functions
function _drawJobs(){
  let template = ""
  ProxyState.jobs.forEach(j => template += j.Template)
  document.getElementById("listings").innerHTML = template
}

export class jobsController{
  constructor(){
    // runs on load
    ProxyState.on("jobs", _drawJobs)
  }

  viewJobs(){
    _drawJobs()
    document.getElementById("form").classList.add("d-none")
    document.getElementById("job-form").classList.remove("d-none")
    document.getElementById("house-form").classList.add("d-none")
  }

  createjob(){
    // form submission causes a page reload by default
    window.event.preventDefault()
    // we need to explicitly tell the button that the form is what we want to target
    let form = window.event.target
    // create a new variable that will hold all the information from the form that we need to pass as an argument to the service
    let newJob = {
      company: form.company.value,
      title: form.title.value,
      start: form.start.value,
      salary: form.salary.value,
      rate: form.rate.value,
      img: form.img.value,
      description: form.description.value,
    }
    jobsService.createJob(newJob)
    form.reset()
  }
}