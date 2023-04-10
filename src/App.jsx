import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;