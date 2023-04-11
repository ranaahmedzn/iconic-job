const addToDb = (id) => {
    let appliedJobList = {}

    // get previously stored job list from localStorage
    const storedList = localStorage.getItem('applied-job-list')
    if(storedList){
        appliedJobList = JSON.parse(storedList)
    }

    // set quantity
    appliedJobList[id] = 1;

    // set applied job list to localStorage
    localStorage.setItem('applied-job-list', JSON.stringify(appliedJobList))
}

// get previously stored cart from localStorage
const getAppliedJobList = () => {
    let appliedJobList = {}

    const storedList = localStorage.getItem('applied-job-list')
    if(storedList){
        appliedJobList = JSON.parse(storedList)
    }
    return appliedJobList;
}

// remove a specific item form localStorage
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
       }
    }
}

const deleteCartFromDb = () => {
    localStorage.removeItem('shopping-cart')
}

export {addToDb, getAppliedJobList, removeFromDb, deleteCartFromDb}