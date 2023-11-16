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
import AllServices from './pages/allServices/AllServices';
import MyServices from './pages/myServices/MyServices';
import MySchedule from './pages/mySchedule/MySchedule';
import AddService from './pages/addService/AddService';
import Details from './components/services/Details';
import PrivateRoute from './privateRoutes/PrivateRoute';
import UpdateService from './pages/update/UpdateService';




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
      },
      {
        path: '/services',
        element: <AllServices></AllServices>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch (`http://localhost:5000/service/${params.id}`)
      },
      {
        path: '/updateService/:id',
        element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
        loader: ({params}) => fetch (`http://localhost:5000/updateService/${params.id}`)
      },
      {
        path: '/myServices',
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
      },
      {
        path: '/mySchedule',
        element: <PrivateRoute><MySchedule></MySchedule></PrivateRoute>
      },
      {
        path: '/addService',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode> 
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
      
  </React.StrictMode>
  
)
