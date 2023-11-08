import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import ErrorPage from './pages/error/ErrorPage';
import About from './pages/about/About';
import Login from './authentication/Login';
import Register from './authentication/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './providers/AuthProvider';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
        
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
