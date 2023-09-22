
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/shared/Nav.jsx';
import WelcomeSec from './component/shared/WelcomeSec'
import Home from './component/home/Home.jsx';
import Details from './component/details/Details.jsx';
import Footer from './component/shared/Footer.jsx';


function App() {
  return (
    <>
     <BrowserRouter>
     <Nav/>
     <WelcomeSec/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>              
    </>
  );
}

export default App;
