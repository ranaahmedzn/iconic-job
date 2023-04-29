import React, { useEffect, useState } from 'react';
import vector from '../assets/Vector.png'
import vector1 from '../assets/Vector-1.png'
import Blog from './Blog';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        fetch('blogData.json').then(res => res.json()).then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div className='bg-gray-100 md:relative'>
                <div className='my-container pt-12 pb-28 text-center'>
                    <h2 className='font-bold text-3xl'>Welcome to My Blogs</h2>
                </div>
                <img className='hidden md:block absolute bottom-0 left-0 w-72' src={vector} alt="" />
                <img className='hidden md:block absolute -top-40 right-0 w-72' src={vector1} alt="" />
            </div>
            <div className='my-container my-16 grid gap-10 grid-cols-1 lg:grid-cols-2'>
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default BlogPage;