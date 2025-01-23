import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/home.jsx'
import Discography from './pages/discography.jsx'

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/discography',
        element: <Discography />,
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
