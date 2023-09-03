import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import { MainPage } from './pages/MainPage/MainPage'
import { SecondPage } from './pages/SecondPage/SecondPage'
import { Feature } from './pages/Feature/Feature'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },

      {
        path: 'secondTask',
        element: <SecondPage />,
      },
      {
        path: 'feature',
        element: <Feature />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
