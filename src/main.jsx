import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './index.jsx';

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //</StrictMode>,
)