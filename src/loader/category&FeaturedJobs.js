import { getAppliedJobList } from "../Utilities/fakeDb"

const getJobCategoriesAndFeaturedJobs = async () => {
    const jobCategoriesData = await fetch('/jobCategories.json')
    const jobCategories = await jobCategoriesData.json()

    const featuredJobsData = await fetch('/featuredJobs.json')
    const featuredJobs = await featuredJobsData.json()

    const appliedJobList = getAppliedJobList()
    let appliedJobs = []

    for (const id in appliedJobList) {
        const selectedJob = featuredJobs.find(existingJob => existingJob.id == id)
        if (selectedJob) {
            appliedJobs.push(selectedJob)
        }
    }

    return [jobCategories, featuredJobs, appliedJobs]
}

export default getJobCategoriesAndFeaturedJobs;