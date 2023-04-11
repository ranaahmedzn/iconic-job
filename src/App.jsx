import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';

export const JobsContext = createContext([])

const App = () => {
  const [jobCategories, featuredJobs, appliedJobs] = useLoaderData()
  const [jobs, setJobs] = useState(appliedJobs)

  return (
    <JobsContext.Provider value={[jobs, setJobs]}>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </JobsContext.Provider>
  );
};

export default App;