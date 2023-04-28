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
import ErrorPage from './components/ErrorPage';
import Statistics from './components/Statistics';
import Blog from './components/BlogPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobPage />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signup',
    element: <SignUp />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </>
)
