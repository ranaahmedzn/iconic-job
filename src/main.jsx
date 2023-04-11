import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import getJobCategoriesAndFeaturedJobs from './loader/category&FeaturedJobs';
import JobDetails from './components/JobDetails';
import { Toaster } from 'react-hot-toast';
import AppliedJobPage from './components/AppliedJobPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: getJobCategoriesAndFeaturedJobs,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: getJobCategoriesAndFeaturedJobs
      },
      {
        path: 'job/:id',
        element: <JobDetails />,
        loader: ({params}) => fetch('/featuredJobs.json')
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
)
