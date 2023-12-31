import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './components/sidebar';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import Profile from './components/profile';
import { useState } from 'react';
import Login from './components/login';
import Register from './components/register';
import ProtectedRoutes from './helpers/ProtectedRoute';


function App() {


  return (
      <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar/>}>
            <Route index element={<Home/>}/>

            <Route path='/Profile' element={
              <ProtectedRoutes>
              <Profile/>
              </ProtectedRoutes>
            }/>

          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
