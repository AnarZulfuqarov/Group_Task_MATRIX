import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import CinemeContext from './context/CinemeContext.tsx'

createRoot(document.getElementById('root')!).render(
<CinemeContext>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </CinemeContext>
)
