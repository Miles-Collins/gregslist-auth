import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";



class JobsService {

  async getJobs() {
    let jobs = await dbContext.Jobs.find()
    return jobs
  }

  async createJob() {
    let job = await dbContext.Jobs.create()
    return job
  }

  async getJobById(jobId) {
    let job = await dbContext.Jobs.find(jobId)
    if(!job) {
      throw new BadRequest ('Invalid Job Id')
    }
    return job
  }

  async editJob(jobId, jobData) {
    let job = await this.getJobById(jobId)

    job.title = jobData.title || job.title
    job.pay = jobData.pay || job.pay

    await job.save()
    return job
  }

  async deleteJob(jobId) {
    let job = await this.getJobById(jobId)
    await job.remove()
    return job
  }

}