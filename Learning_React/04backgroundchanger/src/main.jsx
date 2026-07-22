import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='w-screen flex flex-col align-middle justify-center items-center'>
      <App />
    </main>
  </StrictMode>,
)
