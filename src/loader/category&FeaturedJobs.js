const getJobCategoriesAndFeaturedJobs = async() => {
    const jobCategoriesData = await fetch('jobCategories.json')
    const jobCategories = await jobCategoriesData.json()

    return jobCategories
}

export default getJobCategoriesAndFeaturedJobs;