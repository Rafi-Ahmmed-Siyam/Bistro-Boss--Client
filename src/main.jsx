import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto border'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
