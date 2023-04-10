import React from 'react';

const Category = ({category}) => {
    const {categoryLogo, categoryName, jobsAvailable} = category;
    return (
        <div>
            <div className="p-10 rounded-lg bg-gradient-to-r from-gray-100 to-violet-100">
                <img className="mb-5" src={categoryLogo} alt="" />
                <h3 className="font-bold text-xl mb-2">{categoryName}</h3>
                <p className="text-gray-500">{jobsAvailable}+ Jobs Available</p>
            </div>
        </div>
    );
};

export default Category;