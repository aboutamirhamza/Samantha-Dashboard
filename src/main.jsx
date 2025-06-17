import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './Layout/Layout.jsx'
import Expenses from './Pages/Expenses.jsx'
import Wallets from './Pages/Wallets.jsx'
import Summary from './Pages/Summary.jsx'
import Accounts from './Pages/Accounts.jsx'
import Settings from './Pages/Settings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
              <Route path='/' element={<Layout />}>
                  <Route index element={<App />} />
                  <Route path='/expenses' element={<Expenses />} />
                  <Route path='/wallets' element={<Wallets />} />
                  <Route path='/summary' element={<Summary />} />
                  <Route path='/accounts' element={<Accounts />} />
                  <Route path='/settings' element={<Settings />} />
              </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
