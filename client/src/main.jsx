//import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <>
      <Navbar />
      <App />
      <Footer />
      </>
   </BrowserRouter>,
)
