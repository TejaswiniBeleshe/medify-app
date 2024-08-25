import React from 'react';
import ReactDOM from 'react-dom/client';
import TabPanel from '@mui/lab/TabPanel'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import FindDoctors from './components/FindDoctors/FindDoctors';
import MyBookings from './components/MyBookings';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='find' element={<FindDoctors/>}/>
        <Route path='finddoctors/:s/:c' element={<FindDoctors/>}/>
        <Route path='bookings' element={<MyBookings/>}/>
      </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
