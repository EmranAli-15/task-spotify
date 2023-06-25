import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './dashboard/Dashboard.tsx';
import Home from './pages/home/home.tsx';
import Playlists from './pages/playlists/playlists.tsx';
import Search from './pages/search/Search.tsx';
import Favourites from './pages/favourites/Favourites.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/playlists",
        element: <Playlists></Playlists>
      },
      {
        path: "/search",
        element: <Search></Search>
      },
      {
        path: "/favourites",
        element: <Favourites></Favourites>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
