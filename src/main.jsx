import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import News from './components/news.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <News />
  //</StrictMode>,
)
