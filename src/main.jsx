import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, BrowserRouter, Routes, Route} from 'react-router-dom';
//import {router} from "./routes/routes.jsx"
import { AuthProvider } from './context/AuthProvider.jsx';
import './index.css'

//import components
import Connexion from './components/connexion/connexion';
import Login from './components/connexion/login';
import Register from './components/connexion/register';
import Home from './components/home/home';
import RequireAuth from './components/RequireAuth.jsx';

export const router = createBrowserRouter([

  {
    path:"/",
    element: <RequireAuth />,
    children:[
      {
        index:"/home",
        element:<Home />
      }

    ]
  },
  {
    path: "/auth",
    element: <Connexion />,
    children:[
      {
        index: "/login",
        element: <Login />,
      },
      {
        path:"register",
        element: <Register />
      }
    ]
  }
 
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router = {router} />
    </AuthProvider>


  </React.StrictMode>,
)