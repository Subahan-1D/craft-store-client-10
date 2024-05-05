import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Allart from './components/AllArt/Allart.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import AddCraft from './components/AddCraft/AddCraft.jsx';
import MyArt from './components/MyArt/MyArt.jsx';
import Categories from './components/Categories/Categories.jsx';
import PrivateRoute from './components/Routes/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('http://localhost:5000/categories')
      },
      {
        path:'/allart',
        element:<PrivateRoute><Allart></Allart></PrivateRoute>,
        loader:()=> fetch('http://localhost:5000/categories')
      },
      {
        path:'/addcraft',
        element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>
      },
      {
        path:'/myart/:id',
        element:<PrivateRoute><MyArt></MyArt></PrivateRoute>,
       loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
      },

      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
