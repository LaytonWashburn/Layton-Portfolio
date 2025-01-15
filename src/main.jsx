import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Home} from './Components/Home/Home.jsx'
import { Experience } from './Components/Experience/Experience.jsx'
import { Projects } from './Components/Projects/Projects.jsx'
import { Tutor } from './Components/TypingTutor/Tutor.jsx'
import { 
  createHashRouter, 
  RouterProvider 
} from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Experience",
        element: <Experience/>
      },
      {
        path: "/Projects",
        element: <Projects/>
      },
      {
        path: "/Tutor",
        element: <Tutor/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  )
