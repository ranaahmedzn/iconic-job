const getJobCategoriesAndFeaturedJobs = async() => {
    const jobCategoriesData = await fetch('jobCategories.json')
    const jobCategories = await jobCategoriesData.json()

    const featuredJobsData = await fetch('featuredJobs.json')
    const featuredJobs = await featuredJobsData.json()

    return [jobCategories, featuredJobs]
}

export default getJobCategoriesAndFeaturedJobs;