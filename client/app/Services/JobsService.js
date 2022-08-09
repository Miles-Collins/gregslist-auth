import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { api } from "./AxiosService.js";




class JobsService {


  async getJobs() {
    let res = await api.get('/jobs')
    console.log("Got jobs", res.data);
    ProxyState.jobs = res.data.map(h => new Job(h))
  }
}





export const jobsService = new JobsService();