import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"
import { jobsService } from "../Services/JobsService.js";
// import { getJobForm } from "../Components/JobForm.js";

function _drawJobs()  {
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(j => template += j.Template)
  document.getElementById('listings').innerHTML = template
}




export class JobsController {
  constructor(){
    ProxyState.on('jobs', _drawJobs)
    this.getJobs()
  }

  viewJobs() {
    _drawJobs()
    this.getJobs()
  }

  async getJobs() {
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.error('[Getting Jobs', error)
      Pop.error(error)
    }
  }
}