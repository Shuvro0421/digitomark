import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import AboutUs from './components/Home/AboutUs/AboutUs';
import Body from './components/Home/Body/Body';
import SinglePerson from './components/Home/AboutUs/SinglePerson';
import Portfolios from './components/Home/Portfolios/Portfolios';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/singlePerson/:id",
        element: <SinglePerson />,
        loader: () => fetch('/teams.json')
      },
      {
        path: "/portfolios",
        element: <Portfolios />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-[#0A0E12] h-full w-full m-auto  text-white '>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
