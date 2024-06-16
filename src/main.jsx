import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import Dashboard from './routes/Dashboard.jsx'
import { AuthProvider } from './auth/AuthProvider.jsx'
import { Sounds } from './routes/Sounds.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/:userId/template/:loopId/sounds",
        element: <Sounds />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
)
