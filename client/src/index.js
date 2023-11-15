import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import AddStudent from './views/AddStudent/AddStudent';
import StudentDetail from './views/StudentDetail/StudentDetail';

import {createBrowserRouter , RouterProvider} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/addstudent",
    element : <AddStudent />
  },
  {
    path : "/studentdetail",
    element : <StudentDetail />
  }
])



root.render( <RouterProvider router={router} /> );
