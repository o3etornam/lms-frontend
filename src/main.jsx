import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import ErrorPage from './pages/error/ErrorPage.jsx'
import HomePage from './pages/home/Home.jsx'
import './index.css'

const router = createBrowserRouter([
  {path: '/',
    element: <HomePage/>,
    errorElement: <ErrorPage />
  },
  {path: '/login',
    element: <Login />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
